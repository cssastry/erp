const express = require("express");
const router = express.Router();
const leavesController = require("../controllers/leaveController");



router.get('/', leavesController.getAll);
router.get('/getById/:id', leavesController.getById);
router.post('/add', leavesController.add);
router.patch('/update/:id', leavesController.update);
router.delete('/delete/:id', leavesController.deleteById);

module.exports = router


