

// function to generate markdown for README
function generateMarkdown(data, licenseList) {

  let license = {};
  for(let i = 0; i < licenseList.length; i++) {
    if(data.license === licenseList[i].spdx_id.toLowerCase()) {
      license = licenseList[i]
      break;
    }
  }


  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Test-Instructions)

  ## Installation
  ${data.installation_instructions}

  ## Usage
  ${data.usage}
  
  ## License
  This project is covered under the ${license.name}

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
