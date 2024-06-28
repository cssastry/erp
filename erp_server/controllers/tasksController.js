const tasksRepo = require("../repos/tasksRepo");


const getAll = async (req, res) => {
    try {
        let tasks = await tasksRepo.getAll();
        if (tasks) {
            res.status(200).send({
                success: true,
                message: "Task's fetched successfully",
                data: tasks,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching task's",
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
        let tasks = await tasksRepo.getById(id);
        if (tasks) {
            res.status(200).send({
                success: true,
                message: "Tasks of employee fetched successfully",
                data: tasks,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Failed fetching employee tasts",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    }
};

const add = async (req, res) => {
    try {
        let addData = await tasksRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Task added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding task",
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
        let updateData = await tasksRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Task updated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while updating task",
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
        let deleteData = await tasksRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Task deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting the Task",
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
    updateById,
    deleteById,
}