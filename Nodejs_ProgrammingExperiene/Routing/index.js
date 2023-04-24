const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");

app.use("/", userRouter);

app.listen(3000, (req, res) => {
  console.log("Server s Running");
});
