"use strict";

const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./config");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
   morgan("combined", {
      stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
         flags: "a",
      }),
   })
);

if (config.MODE === "development") {
   app.use(morgan("dev"));
}

app.use("/api", routes);
app.use("/", express.static(path.join(__dirname, "../client")));
/* eslint-disable */
app.use((err, req, res, next) => {
   res.status(500).send({
      message: "Something went wrong!",
   });
   const errorLog = {
      endpoint: `${req.method} ${req.path}`,
      errorMessage: err.message,
      stack: err.stack,
      status: res.statusCode,
   };
   console.error(JSON.stringify(errorLog));
});

const port = process.env.PORT || 2000;

app.listen(port, (err) => {
   if (err) {
      console.error(err);
   } else {
      console.log(
         `listening at http://localhost:${port} (${config.MODE} mode)`
      );
   }
});
