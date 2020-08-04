const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./router/router");

const config = require("../config/config.js");

const app = express();

mongoose.connect(config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

// добавить логирование
app.use(
    morgan(
        // eslint-disable-next-line quotes
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);
app.use(cors());
// добавить статику
app.use(express.static(path.resolve(__dirname, "..", "frontend", "build")));
app.use(bodyParser.json({ type: "*/*" }));

app.get("/", (req, res) => {
    res.sendFile(
        path.resolve(__dirname, "..", "frontend", "build", "index.html")
    );
});

app.use("/api", router);

module.exports = app;
