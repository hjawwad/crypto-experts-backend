const Group = require("../models/group.model");
const STATUS_CODES = require('../helpers/status_codes.helper')
const base64Img = require('base64-img')
const moment = require('moment')
const Contact = require("../models/contact.model");

exports.index = async (req, res) => {
    try {
        let groups = await Group.find({"user_id": req.user.user_id})
        let newArr = await Promise.all(groups.map(async (element) => {
            let contact = 0;
            contact = await Contact.find({ "group_id": element._id })
            return {
                data: element,
                count: contact.length
            }
          }));

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Groups list successfully.",
            data: newArr
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
        let { name, icon } = req.body

        let errors = []
        if (!name?.trim()) {
            errors.push(`The name field is required.`)
        }
        if (!icon?.trim()) {
            errors.push(`The icon field is required.`)
        }
        if (errors.length) {
            return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
                status: false,
                message: "Invalid data.",
                errors
            })
        }

        icon = base64Img.imgSync(icon, 'uploads/groups', moment.now())

        let group = await Group.create({
            user_id: req.user.user_id,
            name,
            icon
        })

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Group created successfully.",
            data: group
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
        let { id } = req.params

        let { name, icon } = req.body

        if (!await Group.exists({"_id": id})) {
            return res.status(STATUS_CODES.NOT_FOUND).json({
                status: false,
                message: "Group not found."
            })
        }

        let data = {}
        if (name) {
            data.name = name
        }
        if (icon) {
            data.icon = base64Img.imgSync(icon, 'uploads/groups', moment.now())
        }

        let group = await Group.findByIdAndUpdate(id, data, { new: true })

        return res.status(STATUS_CODES.OK).json({
            status: true,
            message: "Group updated successfully.",
            data: group
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
        const { id } = req.params
        let group = await Group.findById(id)
        if (group) {
            group.deleteOne()
            return res.status(STATUS_CODES.OK).json({
                status: true,
                message: "Group deleted successfully."
            })
        }
        return res.status(STATUS_CODES.NOT_FOUND).json({
            status: false,
            message: "Group not found."
        })
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
}