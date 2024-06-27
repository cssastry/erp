const express = require("express");
const router = express.Router();
const rolelkpController = require("../controllers/roleslkpController");

router.get('/', rolelkpController.getAll);
router.get('/getbydepartmentId/:id', rolelkpController.getRolesByDepId);
router.post("/add", rolelkpController.add);
router.patch("/update/:id", rolelkpController.updateById);
router.delete("/delete/:id", rolelkpController.deleteById);

module.exports = router;