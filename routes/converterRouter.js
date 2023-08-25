const express = require("express");

const converterController = require("../controllers/");
const router = express.Router();

router.get('/binary', binaryController.binaryPage);

module.exports = router;