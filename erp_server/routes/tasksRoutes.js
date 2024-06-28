const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.get('/', tasksController.getAll);
router.get('/getbyid/:id', tasksController.getById);
router.post('/add', tasksController.add);
router.patch('/update/:id', tasksController.updateById);
router.delete('/delete/:id', tasksController.deleteById);

module.exports = router;