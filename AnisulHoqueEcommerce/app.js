const express = require("express");

const app = express();
var createError = require("http-errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 12;
    console.log(req);
    next();
  } else {
    return res.status(401).send("un auyorized user");
  }
};

app.use((req, res, next) => {
  createError(404, "router not found");
  next();
});

// app.use((err, req, res, next) => {
//   createError(404);
// });d
app.get("/products", isLoggedIn, (req, res) => {
  console.log(req.body.id);
  res.status(200).send({ message: "Products are Returned" });
});
app.get("/", (req, res) => {
  res.send("Welcome To Server");
});
app.get("/test", (req, res) => {
  res.send("Api Working Fine");
});
app.post("/test", (req, res) => {
  res.send("Api Post Working Fine");
});
app.put("/test", (req, res) => {
  res.send("Api Put Working Fine");
});
app.delete("/test", (req, res) => {
  res.send("Api Delelte Working Fine");
});

module.exports = app;
