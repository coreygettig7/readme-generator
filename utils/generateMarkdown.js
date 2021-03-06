
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.test}

  ## Contact:
  If you have any questions, please feel free to contact me via email or my gitHub!
  - Email: [${data.email}](sendto:user@example.com)
  - Github: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
