// Import the express module
const express = require("express");
// Create a new router object

const router = express.Router();
// Import the holiday controller

const holidayController = require("../controllers/holidayController");


// Define a route to get all holidays
// This route will respond to GET requests at the root URL ("/")
router.get('/', holidayController.getAll);
// Define a route to add a new holiday
// This route will respond to POST requests at the "/add" URL
router.post('/add', holidayController.add);
// Define a route to update an existing holiday by ID
// This route will respond to PATCH requests at the "/update/:id" URL
// ":id" is a route parameter representing the ID of the holiday to update

router.patch('/update/:id', holidayController.updateById);
// Define a route to delete a holiday by ID
// This route will respond to DELETE requests at the "/delete/:id" URL
// ":id" is a route parameter representing the ID of the holiday to delete

router.delete('/delete/:id', holidayController.deleteById);
// Export the router object so it can be used in other parts of the application

module.exports = router;