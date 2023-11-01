const inquirer = require('inquirer');
const fs = require('fs')
const Triangle = require('./lib/shapes')
const Cirlce = require('./lib/shapes')
const Square = require('./lib/shapes');
const { userInfo } = require('os');

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

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        massage: 'Please enter 3 charaters for the text',
        validate: (input) => {
            return input.length <= 3;
        },
    },
    {
        type:'input',
        name: 'textColor',
        message: 'Please enter a color or a hexadecimal number for the text',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What shape would you like?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter color or hexadecimal number for the shape'
    },
])
.then((userInput) => {
    const {shape, text, textColor, shapeColor } = userInput;

    const svgInfo = generateSVG(shape, text, textColor, shapeColor);

    saveSVGFile(svgInfo);
})
.catch((error) => {
    console.error('THIS NOT THE SVG YOU ARE LOOKING FOR! ITS', error );
});