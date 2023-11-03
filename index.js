const inquirer = require("inquirer");
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes');


function writeToFile(fileName, answers) {
console.log(answers)
    let shapeO = "";

    shapeO = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';


    let shapeImage;
    if (answers.shape === "Triangle") {
        shapeImage = new Triangle();
        shapeO += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Circle") {
        shapeImage = new Circle();
        shapeO += `<circle cx="150" cy="125" r="80" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Square") {
        shapeImage = new Square();
        shapeO += `<rect width="100" height="100" fill="${answers.shapeBackgroundColor}" />`;
    }

    shapeO += `<text x="150" y="150" font-family="Verdana" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;


    shapeO += "</svg>";

    fs.writeFile(fileName, shapeO, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
    }

function promptMe() {
    inquirer.prompt([
        {
            type: "input",
            message: "What 3 letters would you like to use for your logo text?",
            name: "text",
        },
        {
            type: "list",
            message: "What shape would you like to use?",
            name: "shape",
            choices: ["Triangle", "Circle", "Square"],
        },
        {
            type: "input",
            message: "What is your favorite color? (Enter color keyword OR a hexadecimal number)",
            name: "shapeBackgroundColor",
        },
        {
            type: "input",
            message: "What is your favorite color for the text? (Enter color keyword OR a hexadecimal number)",
            name: "textColor",
        },
    ]).then((answers) => {
        if (answers.text.length > 3) {
            console.log("Please enter only 3 letters");
            promptMe();
        }else {
            writeToFile("logo.svg", answers)
        }
    });
}

promptMe();



