const { isDuplicatePckd, createRandomPckd } = require("../helpers");
const { getUserId } = require("../utils/auth");

module.exports = {
  generrateUrl: async (req, res, prisma) => {
    try {
      const args = req.body;
      // Get args
      const { title, target, enableTracking } = args;

      const userId = getUserId(req);
      // // 1. Get Pckd String
      let pckd;
      // // check if pckd is passed in, else throw error
      if (args.hasOwnProperty("pckd") && args.pckd) {
        pckd = args.pckd;

        // check if pckd is valid
        if (await isDuplicatePckd(prisma, pckd)) {
          throw new Error(
            "The custom backhalf already exists, try a different one."
          );
        }
      } else {
        pckd = await createRandomPckd(prisma);
      }

      // 2. Select data
      let data = {
        pckd,
        target,
        userId,
        title: title,
        enableTracking: enableTracking,
      };

      // 3. Create Pckd
      await prisma.pckd.create({
        data,
      });

      res.json({ createPckd: pckd });
    } catch (e) {
      console.error(e);
    }
  },
  getTargetUrl: async (req, res, prisma) => {
    try {
      const data = req.bpby;
      res.json({ data });
    } catch (e) {
      console.error(e);
    }
  },
};
