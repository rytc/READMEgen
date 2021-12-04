const { default: axios } = require('axios');
const inq = require('inquirer')
const genMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: "Project Title:"
    },
    {
        type: 'input',
        name: 'description',
        message: "Project Description: "
    },
    {
        type: 'input', 
        name: 'install_instructions',
        message: "Installation Instructions: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage Information: ",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Contribution Guidelines: ",
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Test Instructions: ",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want?',
        choices: ['meh'],
        filter(val) {
            return val.toLowerCase()
        }
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'Github Username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address: '
    }
];

let licenseList = []

function writeToFile(filename, data) {
    fs.writeFile(filename, genMarkdown(data, licenseList), (err) => {
        if(err) { console.log("Failed to write readme: " + err) }
    });
}

// function to initialize program
function init() {
    axios.get('https://api.github.com/licenses').then(res => {
        licenseList = res.data; 

        for(let i = 0; i < licenseList.length; i++) {
            questions[6].choices[i] = licenseList[i].spdx_id
        }

        inq.prompt(questions).then(answers => {
            writeToFile("test_readme.md", answers)
        }).catch(err => {
            console.log("Error! " + err)
        })
    }).catch(err => {
        console.log(`Error getting list of licenses:  ${err}`)
    })
    
}

// function call to initialize program
init();
