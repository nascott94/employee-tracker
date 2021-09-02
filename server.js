//dependancies
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

//creating connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tracker_db",
  },
  console.log(`Connected to the tracker_db database.`)
);

// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
//   firstQuestion();
// });

//start of first questions when user runs node
function firstQuestion() {
  inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "How would you like to proceed?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View department",
        "View role",
        "View employee",
      ],
    })
    //switch statement
    .then(function (result) {
      switch (result.option) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View department":
          viewDepartment();
          break;
        case "View role":
          viewRole();
          break;
        case "View employee":
          viewEmployee();
          break;
        case "Update role":
          updateRole();
          break;
        default:
          quit();
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the department's name?",
      name: "deptName",
    })
    .then(function (answer) {
      db.query(
        "INSERT INTO deparment (name) VALUES (?)",
        [answer.deptName],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstQuestion();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "salaryTotal",
      },
      {
        type: "input",
        message: "What is the id?",
        name: "deptID",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO role (title, salary, department_id VALUES(?, ?, ?)",
        [answer.roleName, answer.salaryTotal, answer.departID],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstQuestion();
        }
      );
    });
}