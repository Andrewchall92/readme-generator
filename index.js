const inquirer = require('inquirer');
const fs = require('fs');

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
            choices: ['MIT', 'Apache2.0', 'GNUGeneralPublicv3.0', 'EclipsePublic'],
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
        console.log(answers);
        const readmeContent = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Testing](#testing)
5. [License](#license)
6. [Questions](#questions)

## Installation

${answers.Installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Testing

${answers.testInstructions}

## License
![${answers.license}](https://img.shields.io/badge/${answers.license}-blue)
This project is licensed under the ${answers.license} License.

## Questions

GitHub: [${answers.github}](${answers.github})
Email: If you have any additional questions feel free to email me at ${answers.email}
`;

        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md created successfully!');
        });
    })
    .catch((error) => {
        console.error(error);
    });






