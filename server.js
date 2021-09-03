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

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to db");
  firstQuestion();
});

// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
//   firstQuestion();
// });

//start of first questions when user runs node and gives user the choice to add what action they would like to perform
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
        "Done",
      ],
    })
    //switch statements
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
        default:
          quit();
      }
    });
}
//if adding a department is chosen then a function will run to ask user questions about department and then add it to the department table
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the department's name?",
      name: "deptName",
    })
    .then(function (answer) {
      db.query(
        "INSERT INTO deparment (department_name)",
        [answer.deptName],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstQuestion();
        }
      );
    });
}
//user chose to add a role then a function for role questions and then add that info into the role table
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary?",
      },
      {
        type: "input",
        name: "departId",
        message: "What is the id?",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO role (title, salary, department_id)",
        [answer.roleName, answer.salary, answer.departID],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstQuestion();
        }
      );
    });
}

//user adds an employee then is prompted with employee questions and then add those answers to the employee table
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee role id?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager id?",
      },
    ])
    .then(function (answer) {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id)",
        [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          firstQuestion();
        }
      );
    });
}
//the user can then view the department, roles and employee table with updated info...
function viewDepartment() {
  let query = "SELECT * FROM department";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    firstQuestion();
  });
}

function viewRole() {
  let query = "SELECT * FROM role";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    firstQuestion();
  });
}

function viewEmployee() {
  let query = "SELECT * FROM employee";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    firstQuestion();
  });
}
