const holidayRepo = require("../repos/holidaysRepo");

const getAll = async (req, res) => {
    try {
        let holidays = await holidayRepo.getAll();
        if (holidays) {
            res.status(200).send({
                success: true,
                message: "Holidays fetched successfully",
                data: holidays,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching holidays",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};

const add = async (req, res) => {
    try {
        let addData = await holidayRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Holiday added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding holidays",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    };
};

const updateById = async (req, res) => {
    try {
        let id = req.params.id;
        console.log("_id: ", id);
        console.log("req.body: ", req.body);
        let updateData = await holidayRepo.update(id, req.body);
        console.log("updateData: ", updateData);

        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Holiday updated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while updating Holiday",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};

const deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let deleteData = await holidayRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Holiday deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting the Holiday",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};

module.exports = {
    getAll,
    add,
    updateById,
    deleteById
}