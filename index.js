const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');



//questions and user response
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
    {
      type: 'input',
      message: 'Please provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.', 
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['MIT_License','GNU_General_Public_License_v3.0', 'Mozilla_Public_License_2.0', 'Eclipse_Public_License_2.0' ]
      },
      {
        type: 'input',
        message: 'What us your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'List any other collaborators on this project.',
        name: 'collaborators',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What tests did you run?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please add any additional information or questions.',
        name: 'questions',
      },
      
  ])


  .then((response) => {
    const content = generateMarkdown(response);
  
    fs.writeFile(`${response.title}.md`, content, (err) => {
        if (err) throw err;
        console.log("ReadMe.md has been created successfully!")
    });
  });
















