const inquirer = require('inquirer');
const add = require('./assets/add');
const remove = require('./assets/remove');
const review = require('./assets/review');
const connection = require('./server');

connection.connect((err) => {
    if (err) throw err;
    console.log('Loading Employee Management System...');
    prompts();
})
//artificial loading time
function loadTime(){
    setTimeout( () => {prompt()}, 500);
};

const prompts = () => {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View Employees',
            'View Roles',
            'View Departments',
            'Add Role',
            'Add Department',
            'Add Employee',
            'Edit Employees',
            'Exit'
        ]
    }).then((res) => {
        switch(res.menu){
            case 'View Employees':
                review.empRev();
                loadTime();
                break;
            case 'View Roles':
                review.roleRev();
                loadTime();
                break;
            case 'View Departments':
                review.depRev();
                loadTime();
                break;
            case 'Add Department':
                add.addDep();
                break;
            case 'Add Role':
                add.addRole();
                break;
            case 'Add Employee':  
                add.addEmp();  
                break;
            case 'Edit Employees':
                break;
            case 'Exit':
                connection.end();
                break;
        }
    })
}

module.exports = {prompts};



