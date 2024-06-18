const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController");

router.get('/', projectsController.getAll);
router.post('/add', projectsController.add);
router.patch('/update/:id', projectsController.updateById);
router.delete('/delete/:id', projectsController.deleteById);

module.exports = router;