// circle.radius = 2;
// circle.area = 20 only allow read not write

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

circle.area = 30;
console.log(circle.area);