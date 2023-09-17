const express = require("express");

const binaryController = require("../controllers/binaryController");
const router = express.Router();

router.get('/binary', binaryController.binaryPage);
router.post('/convertBtoD', binaryController.binaryToDecimal);
router.post('/convertDtoB', binaryController.decimalToBinary);

module.exports = router;