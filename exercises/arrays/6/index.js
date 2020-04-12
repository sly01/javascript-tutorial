const numbers = [1, 2, 3, 4];

const max = getMax([100, 50, 150, 250, 75, 125, 25, 30]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let element of array)
    //     if (element > max)
    //         max = element;
    // return max;

    return array.reduce((a, b) => (a > b) ? a: b);
}