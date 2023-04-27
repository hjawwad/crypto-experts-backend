const Company = require("../models/company.model");
const STATUS_CODES = require("../helpers/status_codes.helper");
const base64Img = require("base64-img");
const moment = require("moment");

exports.index = async (req, res) => {
  try {
    let { id } = req.params;
    let companies = await Company.find({ _id: id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Companies list successfully.",
      data: companies,
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
    let { name, icon } = req.body;

    let errors = [];
    if (!name?.trim() && !icon?.trim()) {
      errors.push(`The name or icon field is required.`);
    }

    if (errors.length) {
      return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
        status: false,
        message: "Invalid data.",
        errors,
      });
    }
    if (icon) {
      icon = base64Img.imgSync(icon, "uploads/companies", moment.now());
    }

    let company = await Company.create({
      name,
      icon,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Company created successfully.",
      data: company,
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

    let { name, icon } = req.body;

    if (!(await Company.exists({ _id: id }))) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        status: false,
        message: "Company not found.",
      });
    }

    let data = {};
    if (name) {
      data.name = name;
    }
    if (icon) {
      data.icon = base64Img.imgSync(icon, "uploads/companies", moment.now());
    }

    let company = await Company.findByIdAndUpdate(id, data, { new: true });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Company updated successfully.",
      data: company,
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
    const { id } = req.params;
    let company = await Company.findById(id);
    if (company) {
      company.deleteOne();
      return res.status(STATUS_CODES.OK).json({
        status: true,
        message: "Company deleted successfully.",
      });
    }
    return res.status(STATUS_CODES.NOT_FOUND).json({
      status: false,
      message: "Company not found.",
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};
