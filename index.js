// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: projDesc => {
            if (projDesc) {
                return true;
            } else {
                console.log('Please provide a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any necessary installation instructions for the project',
        validate: instructions => {
            if (instructions) {
                return true;
            } else {
                console.log('Please provide installation instructions for future users!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use the application',
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                console.log('Make sure to provide instructions on how to use the application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project? (Required)',
        validate: howToHelp => {
            if (howToHelp) {
                return true;
            } else {
                console.log('You need to let people know how they can contribute or let them know the project is private.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license(s) was/were used in the making of this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter any names of people that contributed to the project or any necessary attributions. (Required)',
        validate: credits => {
            if (credits) {
                return true;
            } else {
                console.log('Someone needs credit for this work!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your application if necessary'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email so users can contact you with any questions! (Required)',
        validate: yourEmail => {
            if (yourEmail) {
                return true;
            } else {
                console.log('Please provide an email so users can contact you!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username so others can contast you with questions.',
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log('You must enter your GitHub username');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log('You did it! You can now take a look at your newly generated README file!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userData) {
        console.log(userData);
        writeToFile('README.md', generateMarkdown(userData))
    });
};

// Function call to initialize app
init();