const employeeTechStackRepo = require("../repos/employeeTechStackRepo");


const getAll = async (req, res) => {
    try {
        let emoployeeTechStacks = await employeeTechStackRepo.getAll();
        if (emoployeeTechStacks) {
            res.status(200).send({
                success: true,
                message: "Employee Tech Stack's fetched successfully",
                data: emoployeeTechStacks,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching Employee Tech Stack's",
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
        let employeeTechStack = await employeeTechStackRepo.getById(id);
        if (employeeTechStack) {
            res.status(200).send({
                success: true,
                message: "Employee Tech Stack's fetched successfully",
                data: employeeTechStack,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Failed fetching Employee Tech Stack's",
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
        let addData = await employeeTechStackRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Employee Tech Stack added successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while adding employee tech stack",
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
        let deleteData = await employeeTechStackRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Employee Tech stack deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the employee tech stack",
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