const sprintsRepo = require("../repos/sprintsRepo");


const getAll = async (req, res) => {
    try {
        let sprints = await sprintsRepo.getAll();
        if (sprints) {
            res.status(200).send({
                success: true,
                message: "Sprint's fetched successfully",
                data: sprints,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching sprint's",
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
        let addData = await sprintsRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "sprint added successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while adding sprint",
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
        let updateData = await sprintsRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Sprint updated successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while updating sprint",
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
        let deleteData = await sprintsRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Sprint deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the sprint",
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
    deleteById,
}