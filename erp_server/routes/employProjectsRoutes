const express = require("express");
const router = express.Router();
const employProjectsController = require("../controllers/employProjectsController");

router.get('/:id', employProjectsController.getById);
router.post('/add', employProjectsController.add);

module.exports = router;