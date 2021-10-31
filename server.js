const express = require('express');


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
    console.log(`Connected to the Employee database.`)
  );

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM roles`, (err, rows) => {
    console.log(rows);
  });

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
                'Update an employee role'
            ]
            },
        ])
        .then ((answers) => {
            
            switch (answers.action) {
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
        db.query(`SELECT * FROM departments`, (err,rows => {
            console.log(rows);
        }))


    }