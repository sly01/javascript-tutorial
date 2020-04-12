// In javascript function is object

walk();
// Function Declaration - hoisting(process moving function declaration to top by engine)
function walk() {
    console.log('walk');
}

// Anonymous Function Expression (can't be called before expression)
let run = function() {
    console.log('run');
};

let move = run;
move();
run();

// function sum() {
//     let total = 0
//     for (let value of arguments)
//         total += value;
//     return total;
// }

function sum(discount, ...prices) {
   const total = prices.reduce((a, b) => a+b);
   return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5;
    // years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

const person = {
    firstName: 'Ahmet',
    lastName: 'Erkoc',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is a not a string.');

        const parts = value.split(' ');
        if (parts.length !==2 )
            throw new Error('Enter a first and last name.')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'John Smith';
} catch (e) {
    alert(e)    
}


// getters => access properteis
// setters => change (mutate) them
console.log(person);

// Local vs Global Scope

const color = 'red';

function start() {
    const message = 'hi';
    console.log(color);
}

function stop() {
    const another = 'bye';
}

start();

// let vs var (var => function-scoped)
// ES6 (ES2015): let, const => block-scoped

// This keyword
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// bad practice, can be seen as follow
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });
//     }
// };

// bind helps
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this));
//     }
// };

// proper way
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();


// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'Ahmet' }, 1, 2);
// playVideo.apply({ name: 'Ahmet' }, [1, 2]);
// playVideo.bind({ name: 'Ahmet' })();

// playVideo();

