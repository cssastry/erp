const express = require("express");
const router = express.Router();
const controller = require("../controllers/initialUserController");

router.get("/", controller.addInitialUser);

module.exports = router;
