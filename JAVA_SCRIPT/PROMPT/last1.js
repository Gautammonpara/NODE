// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled)


// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// console.log(
//     [1, 2, 3, 4, 5].filter((element) => {
//         return element >= 3;
//     })
// ); //[ 3, 4, 5 ]

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log( studentGrades); 



// console.log(
//     [1, 2, 3, 4, 5].map((element, index) => {
//         return element * 100;
//     }).filter((element, index) => {
//         return element >= 300;
//     })
// );

// console.log(
//     [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
//         console.log(firstElement +" - " + nextElement)
//         return firstElement + nextElement;
//     },10)
// );






