//Setting a chalss constructor to define the shape of the object
class Shape {
    constructor() {
        this.color = '';
    }

// setting a color for the shape function
ReadableStreamDefaultController(colorVariable) {
    this.color = colorVariable;
}
}

// triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 250,190 160,210" style="fill:${this.color};" />`;
}
}

// circle
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" style="fill:${this.color};" />`;
    }
}


//square
class Square extends Shape {
    render() {
        return `<rect width="100" height="100" style="fill:${this.color};" />`;
    }
}

//allowing access to the objects in other files
module.exports = { Triangle, Circle, Square };