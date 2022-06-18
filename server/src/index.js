const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const handleAll = require("./routes/all");
const { generrateUrl, getTargetUrl } = require("./routes/pckd");

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

  const appRouter = express.Router();
  app.use(express.static("../../client/build"));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(bodyParser.json());
  // Redirect from basepath to UI
  appRouter.get("/", (req, res) => res.redirect("/manage"));

  // Handle all manage paths
  appRouter.route(["/manage", "/manage/*"]).get((req, res) => {
    // Send index.html
    // res.render("test", { html: html });
    const buildPath = path.normalize(__dirname + "/../../client/build");
    res.sendFile(path.join(buildPath, "index.html"));
  });

  // app.use(['/manage', '/manage/*'], express.static('../../client/build/'))
  app.use("/manage", express.static(__dirname + "/../../client/build"));

console.log(__dirname + "/../../client/build")
  // generrate shorturl
  appRouter.post("/createPckd", (req, res) => generrateUrl(req, res, prisma));
  // generrate shorturl
  appRouter.post("/getTarget", (req, res) => getTargetUrl(req, res, prisma));
  // Get all routes
  appRouter.get("*", (req, res) => handleAll(req, res, prisma));
  app.use(appRouter);

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(
    process.env.node_env === "production"
      ? `Server started at <URL>:${PORT}`
      : `🚀 Server started at http://localhost:${PORT}`
  );
})();
