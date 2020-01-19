const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/router");

const app = express();

// добавить логирование
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms',
  ),
);
app.use(cors());
// добавить статику
app.use(express.static(path.resolve(__dirname, "..", "frontend", "build")));
app.use(bodyParser.json({ type: "*/*" }));

app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "build", "index.html"),
  );
});

app.use("/api", router);

module.exports = app;
