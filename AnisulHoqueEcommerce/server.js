const app = require("./app");
const secret = require("./secret");
const PORT = secret.serverPort;
app.listen(PORT, () => {
  console.log(`Server is Running at Port ${PORT}`);
});
