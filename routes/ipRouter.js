const express = require("express");

const ipController = require("../controllers/ipController");
const router = express.Router();

router.get('/ip', ipController.ipPage);

module.exports = router;