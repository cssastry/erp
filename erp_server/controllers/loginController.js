const employRepo = require("../repos/employesRepo");
const hashing = require("../utils/hashing");

const login = async (req, res) => {
    try {
        let {employId, password} = req.body;
        let employData = await employRepo.getById(employId);
        if(employData.length > 0){
            let compare = await hashing.passwordCompare(password, employData.password);
            if(compare){
                res.status(200).send({
                    success: true,
                    message: "Login successfull",
                });
            } else {
                res.status(200).send({
                    success: false,
                    message: "Incorrect credentials",
                });
            };
        } else {
            res.status(200).send({
                success: false,
                message: "Incorrect credentials",
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
    login,
};