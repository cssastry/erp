const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsController");

router.get('/', departmentsController.getAll);
router.post("/add", departmentsController.add);
router.patch("/update/:id", departmentsController.updateById);
router.delete("/delete/:id", departmentsController.deleteById);

module.exports = router;