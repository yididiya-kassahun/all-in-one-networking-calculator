const express = require("express");

const homeController = require("../controllers/calculateController");

const router = express.Router();

router.get("/", homeController.homePage);
router.get("/home", homeController.homePage);

module.exports = router;
