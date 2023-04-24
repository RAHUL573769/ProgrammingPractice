const express = require("express");

const getData = (req, res) => {
  res.send("Hello");
};

const getDynamicData = (req, res) => {
  res.send(`My id is${req.params.id}`);
};

module.exports = { getData, getDynamicData };
