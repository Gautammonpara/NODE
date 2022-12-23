console.log(
    [1, 2, 3, 4, 5].filter((element) => {
        return element >= 3;
    })
); //[ 3, 4, 5 ]

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens);
