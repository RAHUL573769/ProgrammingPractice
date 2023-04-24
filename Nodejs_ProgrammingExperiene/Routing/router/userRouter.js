const express = require("express");
const { getData, getDynamicData } = require("../controllers/userController");

const router = express.Router();

router.get("/", getData);
router.get("/:id([0-9,a-z]{4})", getDynamicData);

module.exports = router;
