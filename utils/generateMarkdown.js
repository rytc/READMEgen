const badges = {
  "agpl-3.0" : "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "apache-2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "bsd-2-clause": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "bsd-3-clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "bsl-1.0": "",
  "cc0-1.0": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "epl-2.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "gpl-2.0": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "gpl-3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "lgpl-2.1": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "mit": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "mpl-2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}


// function to generate markdown for README
function generateMarkdown(data, licenseList) {

  let license = {};
  let badge = ""
  for(let i = 0; i < licenseList.length; i++) {
    if(data.license === licenseList[i].spdx_id.toLowerCase()) {
      license = licenseList[i]
      badge = badges[data.license]
      break;
    }
  }


  return `# ${data.title}
  ${badge}

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
