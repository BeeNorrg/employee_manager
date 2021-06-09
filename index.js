const inquirer = require('inquirer');
const add = require('./assets/add');
const remove = require('./assets/remove');
const review = require('./assets/review');
const connection = require('./server');

connection.connect((err) => {
    if (err) throw err;
    console.log('Loading Employee Management System...');
    //artificial loading time
    function dramaticPause(){
        setTimeout( () => {runInquiry()}, 500);
    }
    prompt();
})

const prompt = () => {
    inquirer.prompt({
        name: 'Employee Manager v1.0.0',
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
    }).then((answer) => {
        switch(answer.choice){
            case 'View Employees':
                break;
            case 'View Roles':
                break;
            case 'View Departments':
                break;
            case 'Add Department':
                break;
            case 'Add Role':
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



