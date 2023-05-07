const controller = require("../controllers/interaction.controller");
const auth = require("../middleware/auth");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/contacts/:contact_id/interactions", auth, controller.index);
  app.post("/api/contacts/:contact_id/interactions", auth, controller.store);
  app.put(
    "/api/contacts/:contact_id/interactions/:id",
    auth,
    controller.update
  );
  app.delete(
    "/api/contacts/:contact_id/interactions/:id",
    auth,
    controller.destroy
  );
};
