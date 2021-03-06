const express = require('express');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

const cTable = require('console.table');
const mysql = require('mysql2');



// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      
      user: 'root',
      // {TODO: Add your MySQL password}
      password: 'Linksys235769!',
      database: 'employees'
    },
    console.log(`Welcome to the Employee database!`)
  );

db.connect((err) => {
    if(err) throw err;

    employeeDatabase();
})

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const employeeDatabase = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
            ]
            },
        ])
        .then((answers) => {
            
            switch (answers.choices) {
                case 'View all departments':
                showDepartments();
                break;

                case 'View all roles':
                showRoles();
                break;
                
                case 'View all employees':
                showEmployees();
                break;

                case 'View all departments':
                addDepartment();
                break;

                case 'Add a department':
                addDepartment();
                break;

                case 'Add a role':
                addRole();
                break;

                case 'Add an employee':
                addEmployee();
                break;

                case 'Update an employee role':
                updateEmployee();
                break;
            }
        
        })
    };

    showDepartments = () => {
        // const query = (`SELECT department.id AS id, department.name AS department FROM department`);
        
        db.query(`SELECT * FROM departments`, (err,rows) => {
            console.table(rows);
            employeeDatabase();
        })
    }

    showRoles = () => {
        // const query = (`SELECT roles.id AS id, roles.title AS title, roles.salary AS salary FROM roles`);

        db.query(`SELECT * FROM roles`, (err, rows) => {
            console.table(rows);
            employeeDatabase();
        })
        
        }

    showEmployees = () => {
        //const query = (`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary`)
        db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.roles_id, employee.manager_id FROM employee`, (err, rows) => {
            console.table(rows);
            employeeDatabase();
        })
    }

    addDepartment = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'addDepartment',
                message: 'Please enter a new department'
            }
        ])
        .then(answer => {
            db.query(`INSERT INTO departments (name) VALUES (?)`, answer.addDepartment, (err, result) => {
                console.log('Department ' + answer.addDepartment + ' has been added!')
                showDepartments();
            })
        })
    }

    addRole = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'roleAdd',
                message: 'Please enter a new role!'
            }
            // {
            //     type: 'input',
            //     name: 'addSalary',
            //     message: 'What is the salary of this role?'
            // }
        ])
        .then(answer => {
            console.log(answer);
            db.query(`INSERT INTO roles (title) VALUES (BLaarg)`, answer.roleAdd, (err, result) => {
                console.log(answer.roleAdd)
                console.log('Role ' + answer.roleAdd + ' has been added!')
                showRoles();
            })
        })
    }
