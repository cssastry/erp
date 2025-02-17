const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { networkInterfaces } = require("os");

const Constants = require("./constants");

const app = express();
app.use(cors());

const filePath = path.join(__dirname, "logs", "request.log");
const accessLogStream = fs.createWriteStream(filePath, { flags: "a" });
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}

// Add custom token to get IP address
morgan.token("ip", (req) => {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
});

// Add custom token to get MAC address
const getMACAddress = () => {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.mac; // Return the first MAC address found
      }
    }
  }
  return "MAC address not found";
};

morgan.token("mac", getMACAddress);

// Middleware to fetch and attach location based on IP
const attachLocation = (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const options = {
    hostname: "ipinfo.io",
    path: `/${ip}/json`,
    method: "GET",
  };

  const geoReq = http.request(options, (geoRes) => {
    let data = "";

    geoRes.on("data", (chunk) => {
      data += chunk;
    });

    geoRes.on("end", () => {
      try {
        const geo = JSON.parse(data);
        if (geo.city && geo.region && geo.country) {
          req.location = `${geo.city}, ${geo.region}, ${geo.country}`;
        } else {
          req.location = "Location not found";
        }
      } catch (error) {
        req.location = "Location not found";
      }
      next();
    });
  });

  geoReq.on("error", (error) => {
    req.location = "Location not found";
    next();
  });

  geoReq.end();
};

// Add custom token to get location from request object
morgan.token("location", (req) => req.location);

// Use the location middleware before the morgan logger
app.use(attachLocation);

app.use(morgan(":method :url :status :res[content-length] :response-time ms ip :ip :location mac :mac", { stream: accessLogStream }));
app.use(morgan(":method :url :status :res[content-length] :response-time ms"));

app.use(express.static(path.join(__dirname, "public")));

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
app.use("/api/test", test);

// adding initial user to application
const initUser = require("./routes/initialUserRoute");
app.use("/api/addinitialuser", initUser);

// Routes
const employes = require("./routes/employesRoutes");
const login = require("./routes/loginRoutes");
const paySlips = require("./routes/payslipsRoutes");
const projects = require("./routes/projectsRoutes");
const projectDetails = require("./routes/projectDetailsRoutes");
const employProjects = require("./routes/employesRoutes");
const leaves = require("./routes/leavesRoute");
const holidays = require("./routes/holidaysRoutes");
const departments = require("./routes/departmentsRoutes");
const roles = require("./routes/roleslkpRouter");
const sprints = require("./routes/sprintsRoute");
const tasks = require("./routes/tasksRoutes");
const techStack = require("./routes/techStackRoutes");
const emoployeeTechStack = require("./routes/employeeTechStackRoutes");
const projectTechStack = require("./routes/projectTechStackRoutes");

// EndPoints
app.use("/api/employes", employes);
app.use("/api/login", login);
app.use("/api/payslips", paySlips);
app.use("/api/projects", projects);
app.use("/api/projectdetails", projectDetails);
app.use("/api/employprojects", employProjects);
app.use("/api/leaves", leaves);
app.use("/api/holidays", holidays);
app.use("/api/departments", departments);
app.use("/api/roles", roles);
app.use("/api/sprints", sprints);
app.use("/api/tasks", tasks);
app.use("/api/techstack", techStack);
app.use("/api/employeetechstack", emoployeeTechStack);
app.use("/api/projecttechstack", projectTechStack);

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
