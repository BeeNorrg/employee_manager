const connection = require('../server');
const index = require("../index");
require('console.table');

const empRev = () => {
    let allEmp = 'SELECT employees.id, employees.first_name, employees.last_name, department.department, role.title, role.salary, manager_id FROM employees INNER JOIN role ON employees.job_id=role.id INNER JOIN department ON department.id=role.department_id';
    connection.query(allEmp, (err, rows) => {
        if (err) throw err;
        //make new lines and then add employee table
        console.table("\n", rows, "\n");
    });
}

const roleRev = () => {
    let allRole = 'SELECT title, salary FROM role';
    connection.query(allRole, (err, rows) => {
        if (err) throw err;
        //make new lines and then add role table
        console.table("\n", rows, "\n");
    });
}

const depRev = () => {
    let allDep = 'SELECT department FROM department';
    connection.query(allDep, (err, rows) => {
        if (err) throw err;
        //make new lines and then add dep table
        console.table("\n", rows, "\n");
    });
}

module.exports = { 
    empRev,
    roleRev,
    depRev,
};