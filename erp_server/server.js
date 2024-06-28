const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const fs = require('fs');
const path = require('path');

const Constants = require("./constants");

const app = express();
app.use(cors());

const filePath = path.join(__dirname, "logs", "request.log");
const accessLogStream = fs.createWriteStream(filePath, { flags: 'a' });
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath);
}
app.use(morgan(':method :url :status :res[content-length] :response-time ms', { stream: accessLogStream }));
app.use(morgan(':method :url :status :res[content-length] :response-time ms'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = Constants.PORT;

// mongoDB connection
mongoose
    .connect(Constants.mongoConnection)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

const test = (req, res) => {
    res.status(200).send("Test api successfully");
};
app.use('/api/test', test);

// Routes
const employes = require("./routes/employesRoutes");
const login = require("./routes/loginRoutes");
const paySlips = require("./routes/payslipsRoutes");
const projects = require("./routes/projectsRoutes");
const employProjects = require("./routes/employesRoutes");
const leaves = require('./routes/leavesRoute');
const holidays = require('./routes/holidaysRoutes');
const departments = require('./routes/departmentsRoutes');
const roles = require('./routes/roleslkpRouter');
const sprints = require('./routes/sprintsRoute');
const tasks = require('./routes/tasksRoutes');

// EndPoints
app.use('/api/employes', employes);
app.use('/api/login', login);
app.use('/api/payslips', paySlips);
app.use('/api/projects', projects);
app.use('/api/employprojects', employProjects);
app.use('/api/leaves', leaves);
app.use('/api/holidays', holidays);
app.use('/api/departments', departments);
app.use('/api/roles', roles);
app.use('/api/sprints', sprints);
app.use('/api/tasks', tasks)

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));