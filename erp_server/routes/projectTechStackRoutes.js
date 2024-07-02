const express = require("express");
const router = express.Router();
const projectTechStackController = require("../controllers/projectTechStackController");

router.get('/', projectTechStackController.getAll);
router.get('/getbyid/:id', projectTechStackController.getById)
router.post('/add', projectTechStackController.add);
router.delete('/delete/:id', projectTechStackController.deleteById);

module.exports = router;