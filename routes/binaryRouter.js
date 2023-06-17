const express = require("express");

const binaryController = require("../controllers/binaryController");
const router = express.Router();

router.get('/binary', binaryController.binaryPage);

module.exports = router;