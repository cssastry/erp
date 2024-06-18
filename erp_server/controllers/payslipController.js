const payslipRepo = require("../repos/payslipRepo");
const employRepo = require("../repos/employesRepo");

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await payslipRepo.getById(id);
        if(data){
            res.status(200).send({
                success: true,
                message: "Paysilps fetched successfully",
                data,
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while fetching payslips",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    };
}

const add = async(req, res) => {
    try {
        let id = req.params.id;
        let employDataArray = await employRepo.getById(id);
        let employData = employDataArray[0];
        let netPay = employData.netPay;

        let basicPay = 0.6 * netPay;
        let HRA = 0.4 * basicPay;
        let otherAllowances = netPay - (basicPay + HRA);
        let lossOfDays = noOfWorkingDays - noOfDaysWorked;
        let payPerDay = netPay / noOfWorkingDays;
        let LOP = lossOfDays * payPerDay;
        let gross = basicPay + HRA + otherAllowances;
        let EPF = 0;
        let PF = 0;
        let deductions = EPF + PF + LOP;
        let netPayable = gross - deductions;

        let data = {
            employId: id,
            netPay,
            basicPay,
            payDate: Date.now().toString(),
            workingDays: noOfWorkingDays,
            daysWorked: noOfDaysWorked,
            lossOfDays,
            payPerDay,
            gross,
            HRA,
            OA: otherAllowances,
            EPF,
            PF,
            LOP,
            deductions,
            netPayable,
        };

        let addData = await payslipRepo.add(data);

        if(addData) {
            res.status(200).send({
                success: true,
                message: "Payslip generated successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error in payslip generation",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "internal server error",
        });
    }
};

module.exports = {
    add,
    getById,
};