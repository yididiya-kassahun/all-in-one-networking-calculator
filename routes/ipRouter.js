const express = require("express");

const ipController = require("../controllers/ipController");
const router = express.Router();

router.get('/ip', ipController.ipPage);

router.post('/ipv4calculate', ipController.IPv4Calculator)

module.exports = router;