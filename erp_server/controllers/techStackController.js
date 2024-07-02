const techStackRepo = require("../repos/techStackRepo");


const getAll = async (req, res) => {
    try {
        let techStack = await techStackRepo.getAll();
        if (techStack) {
            res.status(200).send({
                success: true,
                message: "Tech Stack's fetched successfully",
                data: techStack,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching Tech Stack's",
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
        let addData = await techStackRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Tech Stack added successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while adding tech stack",
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
        let updateData = await techStackRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Tech Stack updated successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while updating tech stack",
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
        let deleteData = await techStackRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Tech stack deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the tech stack",
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