const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'checkbox',
      message: 'Please select which sections you would like in your table of contents.',
      name: 'contents',
      choices: ['Installation', 'Usage', 'License', 'Contributors', 'Tests', 'Questions']
    },
    {
      type: 'input',
      message: 'Please provide installation instructions',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.', //how to include images here
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['MIT License','GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Eclipse Public License 2.0' ]
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
    const content = JSON.stringify(response);
    fs.writeFile('README.md', content, (err) => {
    if (err) throw err;
    console.log("ReadMe.md has been created successfully!")
    });
  });


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


