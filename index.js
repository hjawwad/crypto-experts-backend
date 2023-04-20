const http = require("http");
const app = require("./app");
const bodyParser = require('body-parser');

// set maximum file size limit to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});