const express = require("express");

const calculatorController = require("../controllers/calculatorController");

const router = express.Router();

router.get("/calculatorView", calculatorController.calculatorPage);

module.exports = router;
