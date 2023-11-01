const inquirer = require('inquirer');
const fs = require('fs')
const Triangle = require('./lib/shapes')
const Cirlce = require('./lib/shapes')
const Square = require('./lib/shapes')

function generateSVG(shapeType, text, textColor, shapeColor) {

    let shape;
    switch (shapeType) {
      case 'triangle':
        shape = new Triangle();
        break;
      case 'circle':
        shape = new Circle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape type');
        return;
    }

    shape.setColor(shapeColor);

    const svgInfo = shape.drawAsSVG(text, textColor);

    return svgInfo;
}

function saveSVGFile(svgInfo) {
    fs.writeFileSync('logo.svg', svgInfo, 'utf-8');
    console.log('generated logo.svg');
}