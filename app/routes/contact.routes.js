const controller = require("../controllers/contact.controller");
const auth = require("../middleware/auth");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/groups/:group_id/contacts", auth, controller.index);
  app.post("/api/groups/:group_id/contacts", auth, controller.store);
  app.put("/api/groups/:group_id/contacts/:id", auth, controller.update);
  app.get("/api/groups/:group_id/contacts/:id", auth, controller.show);
  app.delete("/api/groups/:group_id/contacts/:id", auth, controller.destroy);
};
