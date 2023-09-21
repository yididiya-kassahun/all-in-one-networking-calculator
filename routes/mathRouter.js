const express = require("express");

const mathContoller = require("../controllers/mathController");
const router = express.Router();

router.get('/mathPage', mathContoller.mathPage);
router.post('/ftod', mathContoller.mathPage);

module.exports = router;