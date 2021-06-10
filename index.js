// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generate = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your project. (Listed from most conditions to none.)',
            choices: [
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'The Unlicense',
            ],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for how other developers can contribute to your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples on how to run tests for your application.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// function writeToFile(data) {}
const writeToFile = (data) =>
    `# ${data.title}

    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    See more of my work on my [GitHub Profile](https://github.com/${data.username}/).
    For any additional questions, reach me at my email: ${data.email}.`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((data) => fs.writeFile('README.md', writeToFile(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
