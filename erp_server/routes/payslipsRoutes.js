const express = require("express");
const router = express.Router();
const payslipsController = require("../controllers/payslipController");

router.get('/:id', payslipsController.getById);
router.post('/add/:id', payslipsController.add);

module.exports = router;