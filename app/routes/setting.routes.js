const controller = require("../controllers/setting.controller");
const auth = require("../middleware/auth");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/settings", auth, controller.index);
    app.post("/api/settings", auth, controller.store);
};