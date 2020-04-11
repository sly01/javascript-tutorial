
const numbers = [3, 4];

// End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

// End - removing
const last = numbers.pop();

// Beginning - removing
const firstNum = numbers.shift();

// Middle - removing
numbers.splice(2, 1);

// Emptying an Array
let nums = [1, 2, 3, 4];
let another = nums;

// Solution 1 (garbage collector)
//nums = [];

// Solution 2
nums.length = 0;

// Solution 3
// nums.splice(0, nums.length)

// Solution 4
// while (nums.length > 0)
//     nums.pop()

console.log(another);



const n = [1, 2, 3, 1, 4]

console.log(n.indexOf(1));
console.log(n.indexOf(1, 2));
console.log(n.lastIndexOf(1));

console.log(n.indexOf(1) !== -1);
console.log(n.includes(1));

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

// Return always false because of reference type use find
console.log(courses.includes({ id: 1, name: 'a' }));

const course = courses.find(function(course) {
    return course.name === 'a';
});

// const course = courses.find(course => course.name === 'a');

// const course = courses.findIndex(function(course) {
//     return course.name === 'a';
// });

console.log(course);


const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

const slice = combined.slice(2, 4);
// const slice = combined.slice();
const copy = [...combined];

console.log(combined);
console.log(slice);
console.log(copy);

// Iterating an Array
// for (let number of numbers)
//     console.log(number);

// numbers.forEach(function(number) {
//     console.log(number);
// });
    
numbers.forEach((number, index) => console.log(index, number));

// Joining array
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combine = parts.join('-');
console.log(combine);

// Array sort
const lessons = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "javaScript" }
];

lessons.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a ===b => 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(lessons);

// every and some for testing the elements of an array (for new browser)
// every()
// some()

// filter() 
// const numbers = [1, -1, 2, 3];
// chain filter-map
// const filtered = numbers.filter(n => n >= 0).map(n => ({ value: n }) );
// const items = filtered.map(n => ({ value: n }) );
// filtered.map(n => '<li>' + n + '</li>');
// cost html = '<ul>' + items.join('') + '</ul>';
// console.log(items);


// Reducing an Array
// const numbers = [1, -1, 2, 3];
// let sum = 0;
// for (let n of numbers)
//     sum += n;
// console.log(sum)

// numbers.reduce((accumulator, currentValue) => accumulator + currentValue);