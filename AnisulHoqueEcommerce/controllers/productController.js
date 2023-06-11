const getProductController = (req, res) => {
  res.status(200).send({ message: "Products are Returned" });
};
module.exports = getProductController;
