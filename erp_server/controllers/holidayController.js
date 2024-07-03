// Import the holidays repository
const holidayRepo = require("../repos/holidaysRepo");
// Controller to handle fetching all holidays
const getAll = async (req, res) => {
    try {
        // Fetch all holidays from the repository

        let holidays = await holidayRepo.getAll();
        // If holidays are found, send a success response

        if (holidays) {
            res.status(200).send({
                success: true,
                message: "Holidays fetched successfully",
                data: holidays,
            });
            // If no holidays are found, send an error response

        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching holidays",
            });
        };
    } catch (error) {
        // Log the error and send an internal server error response

        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};
// Controller to handle adding a new holiday
const add = async (req, res) => {
    try {
        // Add a new holiday using the repository

        let addData = await holidayRepo.add(req.body);
        // If the holiday is added successfully, send a success response

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Holiday added successfully",
            });
        } else {
            // If there is an error while adding the holiday, send an error response

            res.status(204).send({
                success: false,
                message: "Error while adding holidays",
            });
        };
    } catch (error) {
        // Log the error and send an internal server error response

        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    };
};
// Controller to handle updating a holiday by ID
const updateById = async (req, res) => {
    // Extract the holiday ID from the request parameters

    try {
        let id = req.params.id;
        // Update the holiday using the repository

        let updateData = await holidayRepo.update(id, req.body);
        // If the holiday is updated successfully, send a success response

        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Holiday updated successfully",
            });
        } else {
            // If there is an error while updating the holiday, send an error response

            res.status(204).send({
                success: false,
                message: "Error while updating Holiday",
            });
        };
    } catch (error) {
        // Log the error and send an internal server error response

        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};
// Controller to handle deleting a holiday by ID
const deleteById = async (req, res) => {
    try {
        // Extract the holiday ID from the request parameters
        let id = req.params.id;
        // Delete the holiday using the repository
        let deleteData = await holidayRepo.deleteById(id);
        // If the holiday is deleted successfully, send a success response
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Holiday deleted successfully",
            });
        } else {
            // If there is an error while deleting the holiday, send an error response
            res.status(204).send({
                success: false,
                message: "Error while deleting the Holiday",
            });
        };
    } catch (error) {
        // Log the error and send an internal server error response
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};
// Export the controller functions so they can be used in other parts of the application
module.exports = {
    getAll,
    add,
    updateById,
    deleteById
}