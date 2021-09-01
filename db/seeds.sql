INSERT INTO department(id, department_name)
VALUES("money");

INSERT INTO role(title, salary, department_id)
VALUES("in charge of money", 1000000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Olive", "Scott", 1, 1);