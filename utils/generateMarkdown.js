function generateMarkdown(data) {
  return `# ${data.title} 
  
 ![license badge](https://img.shields.io/badge/License-${data.license}-blue)

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\n${data.installation}

## Usage
\n${data.usage}

## License
\nThis project is licensed under the ${data.license}.

## Contributors
${data.collaborators}

## Tests
\n${data.tests}

## Questions
\nFor additional questions, contact [${data.username}](https://github.com/${data.username}) or email ${data.email}.
`;
}



module.exports = generateMarkdown;
