const express = require("express");
const router = express.Router();
const employeeTechStackController = require("../controllers/employeeTechStackController");

router.get('/', employeeTechStackController.getAll);
router.get('/getbyid/:id', employeeTechStackController.getById)
router.post('/add', employeeTechStackController.add);
router.delete('/delete/:id', employeeTechStackController.deleteById);

module.exports = router;