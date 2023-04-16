require("dotenv").config();
require("./app/config/database").connect();
const cors = require('cors')
const express = require("express");

const app = express();

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// load uploaded files
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./app/routes/auth.routes')(app)
require('./app/routes/group.routes')(app)
require('./app/routes/company.routes')(app)
require('./app/routes/contact.routes')(app)
require('./app/routes/comment.routes')(app)
require('./app/routes/setting.routes')(app)
require('./app/routes/interaction.routes')(app)

module.exports = app;