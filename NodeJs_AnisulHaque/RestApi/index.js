const express = require("express");
const app = express();

const port = 3000;
const cors = require("cors");
const path = require("path");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
