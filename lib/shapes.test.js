const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle test', () => {
    it ('should have a Triangle with a color', () => {
        const shape = new Triangle();
        shape.color = 'red';
        expect(shape.color).toBe('red');
    });
     }); 
    
describe('Circle test', () => {
    it ('should have a Circle with a color', () => {
        const shape = new Circle();
        shape.color = 'blue';
        expect(shape.color).toBe('blue');
    });
     });

describe('Square test', () => {
    it ('should have a Square with a color', () => {
        const shape = new Square();
        shape.color = 'green';
        expect(shape.color).toBe('green');
    });
     });

    

// describe('Circle', () => {
//     it('should have a color', () => {
//         const circle = new Circle();
//         expect(circle.color).toBeDefined();
//     });
// });
// describe('Square', () => {
//     it('should have a color', () => {
//         const square = new Square();
//         expect(square.color).toBeDefined();
//     });
    
// });

// Path: lib/shapes.js
// Compare this snippet from index.js:
// const Square = require('./lib/shapes');
// const { userInfo } = require('os');
