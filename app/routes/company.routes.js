const controller = require("../controllers/company.controller");
const auth = require("../middleware/auth");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/companies/:id", auth, controller.index);
    app.post("/api/companies", auth, controller.store);
    app.put("/api/companies/:id", auth, controller.update);
    app.delete("/api/companies/:id", auth, controller.destroy);
};