const inquirer = require("inquirer");
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes');


function writeToFile(fileName, answers) {

    let shapeO = "";

    shaperO = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    shapeO += "<g>";

    shapeO += `${answers.shape}`;


    let shapeImage;
    if (answers.shape === "Triangle") {
        shapeImage = new Triangle();
        shapeO += `<polygon points="200,10 250,190 160,210" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Circle") {
        shapeImage = new Circle();
        shapeO += `<circle cx="50" cy="50" r="40" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Square") {
        shapeImage = new Square();
        shapeO += `<rect width="100" height="100" fill="${answers.shapeBackgroundColor}" />`;
    }

    shapeO =+ `<text x="150" y="100" font-family="Verdana" font-size="20" fill="${answers.textColor}">${answers.text}</text>`;

    shapeO += "</g>";


    shapeO += "</svg>";

    fs.writeFile(fileName, shapeO, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    }

    );

}

function promptMe() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "What shape would you like to use?",
            name: "shape",
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: "input",
            message: "What is your favorite color?",
            name: "shapeBackgroundColor"
        },
        {
            type: "input",
            message: "What is your favorite color for the text?",
            name: "textColor"
        },
        {
            type: "input",
            message: "What would you like to say?",
            name: "text"
        },
        {
            type: "input",
            message: "What is the name of your file?",
            name: "fileName"
        }
    ]).then(function (answers) {
        writeToFile(answers.fileName, answers);
    })
}

promptMe();



