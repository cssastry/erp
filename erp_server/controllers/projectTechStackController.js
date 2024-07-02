const projectTechStackRepo = require("../repos/projectsTechStackRepo");


const getAll = async (req, res) => {
    try {
        let projectTechStack = await projectTechStackRepo.getAll();
        if (projectTechStack) {
            res.status(200).send({
                success: true,
                message: "Project's Tech Stack's fetched successfully",
                data: projectTechStack,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching Project's Tech Stack's",
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
        console.log(id)
        let projectTechStack = await projectTechStackRepo.getById(id);
        if (projectTechStack) {
            res.status(200).send({
                success: true,
                message: "Project's Tech Stack's fetched successfully",
                data: projectTechStack,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Failed fetching project's Tech Stack's",
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
        console.log(req.body)
        let addData = await projectTechStackRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Project Tech Stack added successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while adding project tech stack",
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
        let deleteData = await projectTechStackRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Project Tech stack deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the project tech stack",
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
    deleteById,
}