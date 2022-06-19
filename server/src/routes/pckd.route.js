const router = require("express").Router();
const pckdController = require("../controllers/pckd.controller");
module.exports = (prisma) => {
  router.post("/createPckd", (req, res) =>
    pckdController.generrateUrl(req, res, prisma)
  );
  router.post("/getTarget", (req, res) =>
    pckdController.getTargetUrl(req, res, prisma)
  );
  return router;
};
