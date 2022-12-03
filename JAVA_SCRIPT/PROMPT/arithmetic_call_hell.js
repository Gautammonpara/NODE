//                                           NAME FUNCTION

// function add(num, callback) {
//     return callback(num + 10, false);
// }
// function sub(num, callback) {
//     return callback(num - 5, false);
// }
// function mul(num, callback) {
//     return callback(num * 2, false);
// }
// function div(num, callback) {
//     return callback(num / 2, false);
// }

// add(10, (addres, error) => {
//     if (!error) {
//         console.log(addres);
//         sub(addres, (subres, error) => {
//             if (!error) {
//                 console.log(subres);
//                 mul(subres, (mulres, error) => {
//                     if (!error) {
//                         console.log(mulres);
//                         div(mulres, (divres, error) => {
//                             if (!error) {
//                                 console.log(divres)
//                             }
//                         })
//                     }
//                 })
//             }
//         })

//     }
// })

//                                         ANONYMOUS FUNCTION

// let add = (num, callback) => callback(num + 10, true);
// let sub = (num, callback) => callback(num - 5, false);
// let mul = (num, callback) => callback(num * 2, false);
// let div = (num, callback) => callback(num / 2, false);

// add(10, (addres, error) => {
//     if (!error) {
//         console.log(addres);
//         sub(addres, (subres, error) => {
//             if (!error) {
//                 console.log(subres);
//                 mul(subres, (mulres, error) => {
//                     if (!error) {
//                         console.log(mulres);
//                         div(mulres, (divres, error) => {
//                             if (!error) {
//                                 console.log(divres)
//                             }
//                         })
//                     }
//                 })
//             }
//         })

//     }
//     else
//     {
//         console.log(addres+80);
//     }
// })