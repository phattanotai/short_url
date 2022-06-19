const router = require("express").Router();
const allController = require("../controllers/all.controller");
module.exports = (prisma) => {
  router.get("*", (req, res) =>
    allController.redirectToTarget(req, res, prisma)
  );
  return router;
};
