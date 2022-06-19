const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
// Config Imports
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// Database
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Main Function
(async () => {
  // Creating express server for static assets
  const app = express();
  const httpServer = http.createServer(app);
  // Trust proxy if behind a reverse proxy
  if (process.env.TRUST_PROXY && process.env.TRUST_PROXY !== "false") {
    app.set(
      "trust proxy",
      process.env.TRUST_PROXY === "true"
        ? true /* Convert true as string to boolean */
        : process.env
            .TRUST_PROXY /* process.env.TRUST_PROXY can also be a list of IPs */
    );
  }
  app.use(express.static("../../client/build"));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(bodyParser.json());
  // Redirect from basepath to UI
  app.get("/", (req, res) => res.redirect("/manage"));
  // Handle all manage paths
  app.use("/manage", express.static(__dirname + "/../../client/build"));
  app.use(require("./routes/all.route")(prisma));
  app.use("/api/pckd", require("./routes/pckd.route")(prisma));

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(
    process.env.node_env === "production"
      ? `Server started at <URL>:${PORT}`
      : `🚀 Server started at http://localhost:${PORT}`
  );
})();
