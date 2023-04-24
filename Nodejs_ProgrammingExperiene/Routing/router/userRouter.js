const express = require("express");
const { getData, getDynamicData } = require("../controllers/userController");

const router = express.Router();

router.get("/", getData);
router.get("/:id", getDynamicData);

module.exports = router;
