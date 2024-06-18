const employesRepo = require("../repos/employesRepo");
const hashing = require("../utils/hashing");

const getAll = async (req, res) => {
    try {
        let employes = await employesRepo.get();
        if (employes){
            res.status(200).send({
                success: true,
                message: "Employes fetched successfully",
                data: employes,
            })
        } else {
            res.status(500).send({
                success: false,
                message: "Error in employes fetching",
            })
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
        let hashedpassword = await hashing.passwordHashing(req.body.password);
        req.body.password = hashedpassword;
        let employ = await employesRepo.add(req.body);
        if (employ) {
            res.status(200).send({
                success: true,
                message: "Employ added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Problem facing in adding employ",
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

const update = async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = req.body
        if(updateData.password){
            let hashedPassword = await hashing.passwordHashing(updateData.password);
            updateData.password = hashedPassword;
        };
        let result = await employesRepo.updateById(id, updateData);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Employ data updated",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "problem facing in updating employ data",
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

const getEmployById = async (req, res) => {
    try {
        let id = req.params.id;
        let employ = await employesRepo.getById(id);
        if(employ) {
            res.status(200).send({
                success: true,
                message: "Employ data fetched successfully",
                data: employ,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "problem faced during fetching employ data",
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
        let deleteStatus = await employesRepo.deleteById(id);
        if(deleteStatus) {
            res.status(200).send({
                success: true,
                message: "Employ deleted successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while deleting employ",
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
    update,
    getEmployById,
    deleteById,
};