const express = require("express");

const passGenController = require("../controllers/passGenController");
const router = express.Router();

router.get('/generator', passGenController.generatorPage);
router.post('/generate', passGenController.passGenerate);

module.exports = router;