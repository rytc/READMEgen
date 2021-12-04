
// function to generate markdown for README
function generateMarkdown(data, licenseList) {

  
  return `
  # ${data.title}
  ${data.badge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Test-Instructions)

  ## Installation
  ${data.install_instructions}

  ## Usage
  ${data.usage}
  
  ## License
  This project is covered under the ${data.license.name}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test_instructions}

  ## Questions
  - Github is [${data.github_username}](https://github.com/${data.github_username})
  - Email is [${data.email}](${data.email})

  `;
}

module.exports = generateMarkdown;
