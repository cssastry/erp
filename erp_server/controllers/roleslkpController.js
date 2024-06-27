const roleslkpRepo = require("../repos/roleslkpRepo");


const getAll = async (req, res) => {
    try {
        let roles = await roleslkpRepo.getAll();
        if (roles) {
            res.status(200).send({
                success: true,
                message: "Role's fetched successfully",
                data: roles,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching role's",
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
const getRolesByDepId = async (req, res) => {
    try {
        let id = req.params.id;
        let roles = await roleslkpRepo.getRolesByDepId(id);
        if (roles) {
            res.status(200).send({
                success: true,
                message: "Role's data fetched successfully",
                data: employ,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "problem faced during fetching role's",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
}; const add = async (req, res) => {
    try {
        let addData = await roleslkpRepo.add(req.body);

        if (addData) {
            res.status(200).send({
                success: true,
                message: "Role added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding role",
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
        let updateData = await roleslkpRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Role updated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while updating role",
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
        let deleteData = await roleslkpRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Role deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting the role",
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
    getRolesByDepId,
    add,
    updateById,
    deleteById,
}