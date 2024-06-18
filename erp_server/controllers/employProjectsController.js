const employProjectsRepo = require("../repos/employProjectsRepo");

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let projects = await employProjectsRepo.getById;
        if(projects){
            res.status(200).send({
                success: true,
                message: "Employ projects fetched successfully",
                data: projects,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching employ projects",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internl server error",
        });
    };
};

const add = async (req, res) => {
    try {
        let data = await employProjectsRepo.add(req.body);
        if(data){
            res.status(200).send({
                success: true,
                message: "Employs project added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding employs project",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internl server error",
        });
    };
};

module.exports = {
    getById,
    add,
};