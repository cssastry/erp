const express = require("express");
const router = express.Router();
const sprintsController = require("../controllers/sprintsController");

router.get('/', sprintsController.getAll);
router.post('/add', sprintsController.add);
router.patch('/update/:id', sprintsController.updateById);
router.delete('/delete/:id', sprintsController.deleteById);

module.exports = router;