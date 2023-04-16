const jwt = require("jsonwebtoken");
const STATUS_CODES = require('../helpers/status_codes.helper')

const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(STATUS_CODES.FORBIDDEN).json({
            status: false,
            message: "A token is required for authentication",
            errors: []
        });
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(STATUS_CODES.UNAUTHORIZED).json({
            status: false,
            message: "Invalid Token",
            errors: []
        });
    }
    return next();
};

module.exports = verifyToken;