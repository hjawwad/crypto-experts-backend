const Contact = require("../models/contact.model");
const STATUS_CODES = require('../helpers/status_codes.helper')
const base64Img = require('base64-img')
const moment = require('moment')

exports.index = async (req, res) => {
    try {
        let { group_id } = req.params
        let contacts = await Contact.find({ "group_id": group_id })

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Contacts list successfully.",
            data: contacts
        });
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
}

exports.store = async (req, res) => {
    try {
        let { group_id } = req.params
        let { name, image, email, location, status, job, phone } = req.body

        let errors = []
        // let fields = ["name", "image", "email", "location", "status", "job", "phone"]
        // fields.forEach(field_name => {
        //     if (!req.body[field_name]?.trim()) {
        //         errors.push(`The ${field_name.replace(/\_/g, ' ')} field is required.`)
        //     }
        // })
        if (errors.length) {
            return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
                status: false,
                message: "Invalid data.",
                errors
            })
        }

        req.body.image = base64Img.imgSync(req.body.image, 'uploads/contacts', moment.now())

        let contact = await Contact.create(req.body)

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Contact created successfully.",
            data: contact
        });
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
}

exports.update = async (req, res) => {
    try {
        let { group_id, id } = req.params

        let { name, image, company_id, email, location, status, job, phone } = req.body

        if (!await Contact.exists({ "_id": id, "group_id": group_id })) {
            return res.status(STATUS_CODES.NOT_FOUND).json({
                status: false,
                message: "Contact not found."
            })
        }

        let data = {}
        if (name) {
            data.name = name
        }
        if (image) {
            data.image = base64Img.imgSync(image, 'uploads/contacts', moment.now())
        }
        if (company_id) {
            data.company_id = company_id
        }
        if (email) {
            data.email = email
        }
        if (location) {
            data.location = location
        }
        if (status) {
            data.status = status
        }
        if (job) {
            data.job = job
        }
        if (phone) {
            data.phone = phone
        }

        let contact = await Contact.findByIdAndUpdate(id, data, { new: true })

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Contact updated successfully.",
            data: contact
        })
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { group_id, id } = req.params
        let contact = await Contact.findOne({ "_id": id, "group_id": group_id })
        if (contact) {
            contact.deleteOne()
            return res.status(STATUS_CODES.OK).json({
                status: true,
                message: "Contact deleted successfully."
            })
        }
        return res.status(STATUS_CODES.NOT_FOUND).json({
            status: false,
            message: "Contact not found."
        })
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
}