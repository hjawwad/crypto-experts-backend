const Comment = require("../models/comment.model");
const STATUS_CODES = require("../helpers/status_codes.helper");

exports.index = async (req, res) => {
  try {
    let { contact_id } = req.params;
    let comments = await Comment.find({ contact_id: contact_id });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Comments list successfully.",
      data: comments,
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
    let { comment } = req.body;

    let errors = [];
    let fields = ["comment"];
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

    let comment_record = await Comment.create({
      user_id: req.user.user_id,
      contact_id,
      comment,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Comment created successfully.",
      data: comment_record,
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

    let { comment } = req.body;

    if (!(await Comment.exists({ _id: id, contact_id: contact_id }))) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        status: false,
        message: "Comment not found.",
      });
    }

    let data = {};
    if (comment) {
      data.comment = comment;
    }

    let comment_record = await Comment.findByIdAndUpdate(id, data, {
      new: true,
    });

    return res.status(STATUS_CODES.OK).json({
      status: true,
      message: "Comment updated successfully.",
      data: comment_record,
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
    let comment = await Comment.findOne({ _id: id, contact_id: contact_id });
    if (comment) {
      comment.deleteOne();
      return res.status(STATUS_CODES.OK).json({
        status: true,
        message: "Comment deleted successfully.",
      });
    }
    return res.status(STATUS_CODES.NOT_FOUND).json({
      status: false,
      message: "Comment not found.",
    });
  } catch (error) {
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: error.message,
      errors: [],
    });
  }
};
