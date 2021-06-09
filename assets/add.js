const inquirer = require("inquirer");
const index = require("../index");
const connection = require("../server");
//const sql = require('mysql');

const addEmp = () => {
    console.log("something happened!");
    const empSelect = 'SELECT id, title FROM role';
    const  mngSelect = 'SELECT id, first_name, last_name FROM employee WHERE manager_id != role_id';
    var empChoice = [];
    var mngChoice = [];

    connection.query(empSelect, (err, res) => {
        if (err) throw err;
        empChoice = res.map(({ id, title }) => ({
            name: title,
            value: id,
        }));
        connection.query(mngSelect, (err, res) => {
        if (err) throw err;
        mngChoice = res.map(({ id, first_name, last_name }) => ({
            name: [first_name + ' ' + last_name],
            value: id,
        }));
        empInquire(empChoice, mngChoice);
        });
    });
};

const empInquire = (empChoice, mngChoice) => {
    inquirer.prompt(
        [
            {
                name: 'first_name',
                type: 'input',
                message: "What is the employee's first name?",
            },
            {
                name: 'last_name',
                type: 'input',
                message: "What is the employee's last name?",
            },
            {
                name: 'job',
                type: 'list',
                message: "What is the employee's role in the company?",
                choices: roleChoices
            },
            {
                name: 'manager',
                type: 'list',
                message: "Who is the employee's manager?",
                choices: managerChoices
            }
        ]
    ).then((res) => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: res.first_name,
                last_name: res.last_name,
                job_id: res.job,
                manager_id: res.manager
            },
            function (err, res) {
                if (err) throw err;
                const newEmp = new Promise((resolve, reject) => {
                    console.log(res.affectedRows + " employee added!");
                    resolve('Success!');
                });
                newEmp.then(() => {
                    index.prompts();
                });
            }
        );
    });
};

const addDep = () => {
    inquirer.prompt(
            [
                {
                    name: 'department',
                    type: 'input',
                    message: "What is the name of the new department?",
                }
            ]
        )
        .then((res) => {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: res.department
                },
                function (err, res) {
                    if (err) throw err;
                    const newDep = new Promise((resolve, reject) => {
                        console.log(res.affectedRows + " department added!");
                        resolve('Success!');
                    });
                    newDep.then(() => {
                        index.prompts();
                    });
                }
            )
        });
};

const addRole = () => {
    const query = 'SELECT id, name FROM department';
    var depChoices = [];

    connection.query(query, (err, res) => {
        if (err) throw err;
        depChoices = res.map(({ id, name }) => ({
            value: id,
            name: name,
        }));
        addRoleHelper(depChoices);
    });
    
};

const roleInquire = (depChoices) => {
    inquirer
    .prompt(
        [
            {
                name: 'role',
                type: 'input',
                message: "What is the name of the new role?",
            },
            {
                name: 'salary',
                type: 'number',
                message: "What is the salary? for this position",
            },
            {
                name: 'department',
                type: 'list',
                message: "What department is it in?",
                choices: depChoices
            }
        ]
    )
    .then((res) => {
        connection.query(
            'INSERT INTO role SET ?',
            {
                title: res.role,
                salary: res.salary,
                department_id: res.department,
            },
            function (err, res) {
                if (err) throw err;
                const newRole = new Promise((resolve, reject) => {
                    console.log(res.affectedRows + " role added!\n");
                    resolve('Success!');
                });
                newRole.then(() => {
                    index.prompts();
                });
            }
        )
    });
}


module.exports = {
    addEmp,
    addDep,
    addRole,
}