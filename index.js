const inquirer = require('inquirer');
const fs = require('fs')
const Triangle = require('./lib/shapes')
const Cirlce = require('./lib/shapes')
const Square = require('./lib/shapes')

function SVGLogo(userInput, shapeChoice) {

    let shape;
    switch(shapeChoice) {
        case 'Triangle':
            shape = new Triangle();
            break;

case 'Circle':
    shape = new Circle();
break;       
case 'Square':
    shape = new Square();
break;
default:
console.error('Invalid shape choice');
process.exit(1);
 }

 shape.setColor(userInput.shapeColor);

 const svgInput = shape.drawAsSVG(userInput.text, userInput.textColor);
 return svgInput;
}