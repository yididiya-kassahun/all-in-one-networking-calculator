const express = require("express");

const webController = require("../controllers/webBandController");
const router = express.Router();

router.get('/web', webController.webBandPage);

module.exports = router;