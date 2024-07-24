const express = require("express");
const app = express();
const env = require("dotenv");
const employeeRoutes = require("./routes/employee-routes");

env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

//Set route to the router for endpoints
app.use("/api", employeeRoutes);

//Funxtino for starting application
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Application is running on ${port}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

//Starting application
start();
