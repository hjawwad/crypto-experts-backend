const User = require("../models/user.model");
const STATUS_CODES = require('../helpers/status_codes.helper')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    // Save User to Database
    try {
        const { name, email, password } = req.body;

        let errors = []
        let fields = ['name', 'email', 'password']
        fields.forEach(field_name => {
            if (!req.body[field_name]?.trim()) {
                errors.push(`The ${field_name.replace(/\_/g, ' ')} field is required.`)
            } else if (field_name == 'password' && req.body[field_name]?.length < 8) {
                errors.push(`The ${field_name.replace(/\_/g, ' ')} must be at least 8 characters.`)
            }
        })

        if (errors.length) {
            return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
                status: false,
                message: "Invalid data",
                errors
            })
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(STATUS_CODES.CONFLICT).json({
                status: false,
                message: "User Already Exist. Please Login",
                errors
            })
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        return res.status(STATUS_CODES.CREATED).json({
            status: true,
            message: "User created successfully.",
            data: user
        });
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
};

exports.login = async (req, res) => {
    try {
        // Get user input
        const { email, password, remember } = req.body;

        let errors = []
        if (!email?.trim())
            errors.push("The email field is required.")
        if (!password?.trim())
            errors.push("The password field is required.")

        if (errors.length) {
            return res.status(STATUS_CODES.UNPROCESSABLE_CONTENT).json({
                status: false,
                message: "Invalid data",
                errors
            })
        }

        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: (remember ? "30 days" : "2h"),
                }
            );

            // save user token
            user.token = token;

            // user
            return res.status(STATUS_CODES.OK).json({
                status: true,
                message: "Login successful.",
                data: user
            });
        }
        return res.status(STATUS_CODES.UNAUTHORIZED).json({
            status: false,
            message: "Invalid Credentials",
            errors: []
        })
    } catch (error) {
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            status: false,
            message: error.message,
            errors: []
        })
    }
};