const Setting = require("../models/setting.model");
const STATUS_CODES = require("../helpers/status_codes.helper");

exports.index = async (req, res) => {
  try {
    let settings = await Setting.findOne({ user_id: req.user.user_id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Settings get successfully.",
      data: settings,
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
    let { sidebar_heading } = req.body;
    let errors = [];
    let fields = ["sidebar_heading"];
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

    let setting = await Setting.findOne();
    if (setting) {
      setting = await Setting.findByIdAndUpdate(
        setting._id,
        {
          sidebar_heading,
        },
        { new: true }
      );
    } else {
      setting = await Setting.create({
        user_id: req.user.user_id,
        sidebar_heading,
      });
    }

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Settings saved successfully.",
      data: setting,
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};
