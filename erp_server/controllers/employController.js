const employesRepo = require("../repos/employesRepo");
const hashing = require("../utils/hashing");
// const employeeHexHandler = require('../utils/employeeHexIdHandler');

const getAll = async (req, res) => {
    try {
        let employes = await employesRepo.get();
        if (employes) {
            res.status(200).send({
                success: true,
                message: "Employes fetched successfully",
                data: employes,
            })
        } else {
            res.status(204).send({
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

        let nextNumber;
        let exEmpId = await employesRepo.findEmpIdForHexa(req.body.employee);
        if (exEmpId.length != 0) {
            const ep0 = exEmpId[0].employeeId
            const ep1 = ep0.slice(-3);
            nextNumber = (parseInt(ep1, 10) + 1).toString().padStart(3, '0');
        } else {
            nextNumber = '001';
        }
        const currentYear = new Date().getFullYear().toString().slice(-2);
        // let newHexEmployeeId = employeeHexHandler.trimHexVal(exEmpId);
        // console.log("newHexEmployeeId: ", newHexEmployeeId);
        // let hashedpassword = await hashing.passwordHashing(req.body.password);
        // console.log("hashedPassword: ", hashedpassword);
        // req.body.password = hashedpassword;
        let empdata = {
            email: req.body.email,
            password: req.body.password,
            employeeId: `SM${currentYear}${nextNumber}`
        }
        let employExists = await employesRepo.getEmployByEmail(empdata.email);
        if (employExists.length > 0) {
            res.status(400).send({
                success: false,
                message: "Employ email already exists :(",
            });
        } else {
            let employ = await employesRepo.add(empdata);
            if (employ) {
                res.status(200).send({
                    success: true,
                    message: "Employ added successfully :)",
                });
            } else {
                res.status(204).send({
                    success: false,
                    message: "Problem facing in adding employ ;(",
                });
            };
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error ^_^",
        });
    };
};

const update = async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = req.body
        if (updateData.password) {
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
            res.status(204).send({
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
        if (employ) {
            res.status(200).send({
                success: true,
                message: "Employ data fetched successfully",
                data: employ,
            });
        } else {
            res.status(204).send({
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
        if (deleteStatus) {
            res.status(200).send({
                success: true,
                message: "Employ deleted successfully",
            });
        } else {
            res.status(204).send({
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