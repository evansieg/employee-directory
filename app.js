// import express employees
import express from "express";
import employees from "#db/employees";

//create the express app
//export app
const app = express();
export default app;

//get request to the route
//send greeting message back to clinet
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

//send all employees
app.get("/employees", (req, res) => {
  res.send(employees);
});

//define randome before ID
// get a random employee from list
app.get("/employees/:id", (req, res) => {
  const random = Math.floor(Math.random() * employees.length);
  res.send(employees[random]);
});

//get the id from URL
//Find employee with corresponding ID
// send 404 error if no employee is found
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.send(employee);
});
