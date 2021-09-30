INSERT INTO departments (departments_name)
VALUES("CEO", "Sales", "Human Resources", "Engineers", "Marketing");

INSERT INTO role (title, salary, department_id)
VALUES
("Boss", 900000, 1), 
("Sales Manager", 400000, 2), ("Sales Person", 200000, 2),
("Human Resources Manager", 400000, 3), ("Human Resources Employee", 200000, 3),
("Engineering Manager", 400000, 4), ("Engineer", 200000, 4),
("Markering Manager", 400000, 5), ("Marketing Employee", 200000, 5);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Olive", "Scott", 1, 1), 
("Becca", "Blaustein", 2, 1), ("Leo", "Blaustein", 3, 2),
("Carolina", "Foley", 4, 1), ("Raisin", "Foley", 5, 2),
("Dan", "Possehl", 6, 1), ("Lucy" "Possehl", 7, 2),
("Sami", "Scott", 8, 1), ("Wile", "Scott", 9, 2);

SELECT 
employee.first_name, employee.last_name, role.title, role.salary, departments.departments_name, employee.first_name as manager_firstname, employee.last_name as manager_lastname
from employee 
join role on employee.role_id = role_id
join departments on role.department_id = department.id
Left join employee as employee on employee.manager_id = employee.id;

select
    *
from
    departments;
select
    *
from
    role;
select
    *
from
    employee;
