const express = require("express");
const router = express.Router();
const employController = require("../controllers/employController");

router.get('/', employController.getAll);
router.post("/add", employController.add);
router.patch("/update/:id", employController.update);
router.delete("/delete/:id", employController.deleteById);
router.get("/employid/:id", employController.getEmployById);

module.exports = router;