const express = require("express");

const getData = (req, res) => {
  res.send("Hello");
};

const getDynamicData = (req, res) => {
  console.log(req.params.id);
};

module.exports = { getData, getDynamicData };
