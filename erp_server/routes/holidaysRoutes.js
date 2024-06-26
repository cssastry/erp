const express = require("express");
const router = express.Router();
const holidayController = require("../controllers/holidayController");



router.get('/:id', holidayController.getAll);
router.post('/add', holidayController.add);
router.patch('/add', holidayController.updateById);
router.delete('/add', holidayController.deleteById);

module.exports = router;