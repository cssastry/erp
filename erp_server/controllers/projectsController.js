const projectsRepo = require("../repos/projectsRepo");

const getAll = async (req, res) => {
    try {
        let projects = await projectsRepo.get();
        if (projects) {
            res.status(200).send({
                success: true,
                message: "Projects fetched successfully",
                data: projects,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching projects",
            });
        }
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
        let data = await projectsRepo.add(req.body);
        if(data){
            res.status(200).send({
                success: true,
                message: "Project added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding project",
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
        let updatedData = await projectsRepo.updateById(id, req.body);
        if(updatedData) {
            res.status(200).send({
                success: true,
                message: "Project updated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error in updating project",
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

const deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await projectsRepo.deleteById(id);
        if(data){
            res.status(200).send({
                success: true,
                message: "project deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting project",
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

module.exports = {
    getAll,
    add,
    updateById,
    deleteById,
};