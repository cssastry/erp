const express = require("express");
const router = express.Router();
const techStackController = require("../controllers/techStackController");

router.get('/', techStackController.getAll);
router.post('/add', techStackController.add);
router.patch('/update/:id', techStackController.updateById);
router.delete('/delete/:id', techStackController.deleteById);

module.exports = router;