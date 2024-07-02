const employRepo = require("../repos/employesRepo");
// const hashing = require("../utils/hashing");

const login = async (req, res) => {
    try {
        console.log("req.body: ", req.body);
        let { email, password } = req.body;
        let employData = await employRepo.getById(email);
        if (employData.length > 0) {
            let compare = employData[0].password;
            if (compare === password) {
                res.status(200).send({
                    success: true,
                    message: "Login successfull",
                    data: employData[0],
                });
            } else {
                res.status(200).send({
                    success: false,
                    message: "Incorrect credentials",
                });
            };
        } else {
            res.status(204).send({
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