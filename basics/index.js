
function findMax(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

function isLandscape(width, height) {
    return (width > height) ? true : false;
}

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
}

console.log(findMax(40, 60));
console.log(isLandscape(100, 50));
console.log(fizzBuzz(15));