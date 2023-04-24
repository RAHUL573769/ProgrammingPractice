const express = require("express");

const getData = (req, res) => {
  res.send("Hello");
};

module.exports = { getData };
