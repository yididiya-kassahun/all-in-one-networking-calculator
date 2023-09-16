const express = require("express");

const binaryController = require("../controllers/binaryController");
const router = express.Router();

router.get('/binary', binaryController.binaryPage);
router.post('/convertBtoD', binaryController.binaryToDecimal);


module.exports = router;