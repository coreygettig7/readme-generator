
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
  - [Additional Info](#additional-info)

  ## Description:

  ## Installation:

  ## Usage:

  ## Contribution:

  ## Testing:

  ## Contact Information:
  - Email: 
  - Github: 
`;
}

module.exports = generateMarkdown;
