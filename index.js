const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

require("dotenv").config();

const cors = require("cors");
const fileUpload = require("express-fileupload");

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(express.static(path.join(__dirname, 'public')))

const router = require("./routes/router");
app.use("/api/v1", router);

const DBconnect = require("./database/mongodb");

DBconnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
