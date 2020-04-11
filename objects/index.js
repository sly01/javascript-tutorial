
// Factory Function, Camel notation
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

c1 = createCircle(1);
c2 = createCircle(2);

// Constructor Function, Pascal notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);


// Cloning object

//const another = {};
// for (let key in circle)
//     another[key] = circle[key];

//const another = Object.assign({}, circle);

//const another = { ...circle };


//console.log(another);

// String primitive
const message = '  hi';

// String object
const another = new String('hi');
