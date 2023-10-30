// adding shapes

// triangle
class Triangle {
    constructor() {
        this.color = '';
    }
}

// circle
class Circle {
    constructor() {
        this.color ='';
    }
}

//square
class Square {
    contructor(){
        this.color = '';
    }
}

//allowing access to the objects in other files
modules.export = {
    Triangle,
    Circle,
    Square,
};