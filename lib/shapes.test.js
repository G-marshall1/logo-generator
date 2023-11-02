const Triangle = require('../lib/shapes')
const Circle = require('../lib/shapes')
const Square = require('../lib/shapes')

describe('Triangle', () => {
   it('should have a color', () => {
       const triangle = new Triangle();
       expect(triangle.color).toBeDefined();
   });

});
describe('Circle', () => {
    it('should have a color', () => {
        const circle = new Circle();
        expect(circle.color).toBeDefined();
    });
});
describe('Square', () => {
    it('should have a color', () => {
        const square = new Square();
        expect(square.color).toBeDefined();
    });
    
});

// Path: lib/shapes.js
// Compare this snippet from index.js:
// const Square = require('./lib/shapes');
// const { userInfo } = require('os');
