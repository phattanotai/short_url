const handleHitInsert = require("../utils/hitInsert");

module.exports = {
  redirectToTarget: async (req, res, prisma) => {
    // Check if test mode
    const testMode = process.env.NODE_ENV;
    // Get first subpath from url
    const subPath = req.url.split("/")[1];
    // Get request ip address from the connection or from header
    const remoteAddr = !testMode
      ? "142.250.199.14"
      : req.connection.remoteAddress.includes("::")
      ? req.connection.remoteAddress
      : req.headers["x-forwarded-for"] || req.headers["x-real-ip"];
    // Get user agent from header

    // http://localhost:4000/7ahsa13
    const userAgent = req.headers["user-agent"];

    // Check if subpath is a valid pckd
    try {
      const data = await prisma.pckd.findUnique({
        where: {
          pckd: subPath,
        },
        select: {
          target: true,
          id: true,
          hitCount: true,
          enableTracking: true,
        },
      });

      // 2. Return target, else throw error
      if (!data || !data.target) {
        return res.status(404).send("Target not found");
      }

      // 3. Insert hit inside table
      // only if link was created by authenticated user
      // else ignore
      if (data.enableTracking) {
        handleHitInsert({ prisma, pckdId: data.id, userAgent, ip: remoteAddr });
      }

      // Increses the hit count
      prisma.pckd
        .update({
          where: {
            id: data.id,
          },
          data: {
            hitCount: {
              increment: 1,
            },
          },
        })
        .then(() => {});
      // ^ Prisma prommses are not normal promises (instead they are thenables), and will only run if awaited or .then'ed
      // https://www.prisma.io/docs/concepts/components/prisma-client#:~:text=The%20client%20methods%20are%20%22thenable%22%2C
      // Redirect to target
      res.redirect(data.target);
    } catch (e) {
      console.error(e);
    }
  },
};
