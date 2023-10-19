const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: "title",
            message: "What is the name of your project?",
            type: "input",
        },
        {
            name: "description",
            message: "Enter a description.",
            type: "input",
        },
        {
            name: "Installation",
            message: "Enter installation instructions.",
            type: "input",
        },
        {
            name: "usage",
            message: "Enter your usage instructions",
            type: "input",
        },
        {
            name: "contribution",
            message: "List all contributers",
            type: "input",
        },
        {
            name: "testInstructions",
            message: "Enter test instructions",
            type: "input",
        },
        {
            name: "license",
            message: "Please choose a license",
            type: "list",
            choices: ['MIT', 'Apache 2.0', 'GNU General Public v3.0', 'Eclipse Public'],
        },
        {
            name: "github",
            message: "Please enter your GitHub profile link",
            type: "input"
        },
        {
            name: "email",
            message: "Please enter your email",
            type: "input",
        }
    ])
    .then((answers) => {
        console.log(answers.title);
        console.log(answers.description);
        console.log(answers);
    })
    .catch((error) => {
        console.error(error);
    });