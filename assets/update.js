//UPDATE EMPLOYEE ROLE AND TABLE
const inquirer = require('inquirer');
const connection = require('../server');
const index = require('../index')

function updateEmpRole() {
    const empSelect = 'SELECT employee.id, first_name, last_name, role_id FROM employee;';
    const roleSelect = 'SELECT role.id, title FROM role';
    var emp = [];
    var titles = [];
    connection.query(empSelect, (err, res) => {
        if (err) throw err;
        emp = res.map(({ id, first_name, last_name, role_id }) => ({
            id: id,
            name: first_name + ' ' + last_name,
            role_id: role_id,
        }));
        //console.log(empList);
        connection.query(roleSelect, (err, res) => {
            if(err) throw err;
            titles = res.map(({ id, title }) => ({
                role_id: id,
                title: title,
            }));
            //console.log(roleList);
            return updater(emp, titles); 
        });
    });

};
// inquire for selected employee and new role
const updater = (emp, titles) => {
    inquirer.prompt(
        [
            {
                name: 'employee',
                type: 'list',
                message: 'Select an employee to update',
                choices: emp,
            },
            {
                name: 'title',
                type: 'list',
                message: 'What is their new role?',
                choices: titles,
            }
        ]
    ).then((res) => {
    const roleRes = connection.query(
        'UPDATE employee WHERE ? ',
            [{employee: res.employee}, {role_id: res.title.id}],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " employee updated!");
                index.prompts();
        });
    });
}
module.exports = {updateEmpRole}