const express = require("express");
const router = express.Router();
const projectDetailsController = require("../controllers/projectDetailsController");

router.get('/getbyid/:id', projectDetailsController.getById);
router.post('/add', projectDetailsController.add);
router.delete('/delete/:id', projectDetailsController.deleteById);

module.exports = router;