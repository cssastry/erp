const leavesRepo = require("../repos/leavesRepo");

const getAll = async (req, res) => {
    try {
        let leaves = await leavesRepo.getAll();
        if (leaves) {
            res.status(200).send({
                success: true,
                message: "Leaves fetched successfully",
                data: leaves,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching leaves",
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

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let levesData = await leavesRepo.getById(id);
        if (levesData) {
            res.status(200).send({
                success: true,
                message: "Leaves on employ fetched successfully",
                data: levesData,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching leaves",
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

const add = async (req, res) => {
    try {
        let addData = await leavesRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "leave added successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while adding leave",
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

const update = async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = await leavesRepo.update(id, req.body);

        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Leave updated successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while updating leave",
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
        let deleteData = await leavesRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Leave deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the leave",
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
    getById,
    add,
    update,
    deleteById,
};