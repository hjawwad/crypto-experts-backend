const Interaction = require("../models/interaction.model");
const STATUS_CODES = require("../helpers/status_codes.helper");

exports.index = async (req, res) => {
  try {
    let { contact_id } = req.params;
    let interactions = await Interaction.find({ contact_id: contact_id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Interactions list successfully.",
      data: interactions,
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
    let { contact_id } = req.params;
    let { name, date, location, description } = req.body;

    let errors = [];
    let fields = ["name", "date", "location", "description"];
    fields.forEach((field_name) => {
      if (!req.body[field_name]?.trim()) {
        errors.push(`The ${field_name.replace(/\_/g, " ")} field is required.`);
      }
    });
    if (errors.length) {
      return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
        status: false,
        message: "Invalid data.",
        errors,
      });
    }

    let interaction = await Interaction.create({
      user_id: req.user.user_id,
      contact_id,
      name,
      date,
      location,
      description,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Interaction created successfully.",
      data: interaction,
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
    let { contact_id, id } = req.params;

    let { name, date, location, description } = req.body;

    if (!(await Interaction.exists({ _id: id, contact_id: contact_id }))) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        status: false,
        message: "Interaction not found.",
      });
    }

    let data = {};
    if (name) {
      data.name = name;
    }
    if (date) {
      data.date = date;
    }
    if (location) {
      data.location = location;
    }
    if (description) {
      data.description = description;
    }

    let interaction = await Interaction.findByIdAndUpdate(id, data, {
      new: true,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Interaction updated successfully.",
      data: interaction,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { contact_id, id } = req.params;
    let interaction = await Interaction.findOne({
      _id: id,
      contact_id: contact_id,
    });
    if (interaction) {
      interaction.deleteOne();
      return res.status(STATUS_CODES.OK).json({
        status: true,
        message: "Interaction deleted successfully.",
      });
    }
    return res.status(STATUS_CODES.NOT_FOUND).json({
      status: false,
      message: "Interaction not found.",
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};
