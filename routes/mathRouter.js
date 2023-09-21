const express = require("express");

const mathContoller = require("../controllers/mathController");
const router = express.Router();

router.get('/mathPage', mathContoller.mathPage);

module.exports = router;