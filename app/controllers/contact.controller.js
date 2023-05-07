const Contact = require("../models/contact.model");
const STATUS_CODES = require("../helpers/status_codes.helper");
const base64Img = require("base64-img");
const moment = require("moment");

exports.index = async (req, res) => {
  try {
    let { group_id } = req.params;
    let contacts = await Contact.find({ group_id: group_id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Contacts list successfully.",
      data: contacts,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};

exports.show = async (req, res) => {
  try {
    let { id } = req.params;
    let contact = await Contact.find({ _id: id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Contact show successfully.",
      data: contact,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};

exports.store = async (req, res) => {
  try {
    if (req.body.image) {
      req.body.image = base64Img.imgSync(
        req.body.image,
        "uploads/contacts",
        moment.now()
      );
    }

    let contact = await Contact.create(req.body);

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Contact created successfully.",
      data: contact,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};

exports.update = async (req, res) => {
  try {
    let { id } = req.params;
    const updateData = {};
    const obj = req.body;
    for (const key in obj) {
      updateData[key] = obj[key];
    }

    const contact = await Contact.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Contact updated successfully.",
      data: contact,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      body: req.body,
      errors: [],
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { group_id, id } = req.params;
    let contact = await Contact.findOne({ _id: id, group_id: group_id });
    if (contact) {
      contact.deleteOne();
      return res.status(STATUS_CODES.OK).json({
        status: true,
        message: "Contact deleted successfully.",
      });
    }
    return res.status(STATUS_CODES.NOT_FOUND).json({
      status: false,
      message: "Contact not found.",
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};
