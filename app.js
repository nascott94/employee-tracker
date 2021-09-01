const mysql2 = require("mysql2");
const inquirer = require("inquirer");

const db = mysql2.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "tracker_db",
  },
  console.log(`Connected to the tracker_db database.`)
);

db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});

function firstQuestion() {
  inquirer.prompt({
    type: "list",
    message: "How would you like to proceed?",
    choices: [
      "Add department",
      "Add role",
      "Add employee",
      "View department",
      "View role",
      "View employee",
    ],
  });
}
