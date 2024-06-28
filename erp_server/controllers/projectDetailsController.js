const projectDetailsRepo = require("../repos/projectDetailsRepo");


const getAll = async (req, res) => {
    try {
        let newProjectDetails = await projectDetailsRepo.getAll();
        if (newProjectDetails) {
            res.status(200).send({
                success: true,
                message: "Project's fetched successfully",
                data: newProjectDetails,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching project's",
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
        let addData = await projectDetailsRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Department's added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding department's",
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
        let updateData = await projectDetailsRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Department updated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while updating department",
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
        let deleteData = await projectDetailsRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Department deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting the department",
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