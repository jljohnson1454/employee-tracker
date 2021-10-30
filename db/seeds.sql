INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 80000, 1),
('Salesperson' 75000, 1),
('Lead Engineer', 100000, 2),
('Software Engineer', 90000, 2),
('Accountant', 110000, 3),
('Legal Team Lead', 200000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 1, 1),
('Ashley', 'Rodriguez', 2, NULL),
('Kevin', 'Tupik', 2, 3),
('Malia', 'Brown',  3, NULL),
('Sarah', 'Lourd', 4, 5 ),
('Tom', 'Allen', 4, NULL),
('Tammer', 'Galal', 7)