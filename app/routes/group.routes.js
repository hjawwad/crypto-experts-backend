const controller = require("../controllers/group.controller");
const auth = require("../middleware/auth");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/groups", auth, controller.index);
  app.post("/api/groups", auth, controller.store);
  app.put("/api/groups/:id", auth, controller.update);
  app.delete("/api/groups/:id", auth, controller.destroy);
};
