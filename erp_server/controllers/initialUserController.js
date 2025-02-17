const departmentRepo = require("../repos/departmentsRepo");
const roleRepo = require("../repos/roleslkpRepo");
const employRepo = require("../repos/employesRepo");
const addInitialUser = async (req, res) => {
  try {
    let initialDept = {
      title: "Administration",
    };
    await departmentRepo.add(initialDept);
    let deptData = await departmentRepo.getAll();
    let deptId = deptData[0]._id;
    let initRole = {
      title: "Super User",
      departmentId: deptId,
    };
    await roleRepo.add(initRole);
    let roleData = await roleRepo.getAll();
    roleId = roleData[0]._id;
    let nextNumber;
    let exEmpId = await employRepo.findEmpIdForHexa(req.body.employee);
    if (exEmpId.length != 0) {
      const ep0 = exEmpId[0].employeeId;
      const ep1 = ep0.slice(-3);
      nextNumber = (parseInt(ep1, 10) + 1).toString().padStart(3, "0");
    } else {
      nextNumber = "001";
    }
    const currentYear = new Date().getFullYear().toString().slice(-2);
    //initial user details
    let user = {
      employeeId: `SM${currentYear}${nextNumber}`,
      firstName: "CS",
      lastName: "Sastry",
      email: "admin@goscholarly.com",
      password: "admin",
      title: "CEO",
      roleId: roleId,
      status: 1,
    };
    let emplyAddStatus = await employRepo.add(user);
    if (emplyAddStatus) {
      res.status(200).send({
        success: true,
        message: "Initial employe added successfully",
      });
    } else {
      res.status(204).send({
        success: false,
        message: "Error in adding initial employe",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = {
  addInitialUser,
};
