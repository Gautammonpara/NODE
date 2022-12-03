const prompt = require("prompt-sync")();


function revers(n) {
    const len = n.length;
    for (let i = 0; i < len / 2; i++) {
        if (n[i] !== n[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let n = (prompt("Enter String "));
console.log(revers(n));