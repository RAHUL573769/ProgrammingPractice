const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");
const { getDynamicData } = require("./controllers/userController");
console.log(userRouter);
app.use("/", userRouter);

app.use("/dynamic", userRouter);
app.listen(3000, (req, res) => {
  console.log("Server s Running");
});
