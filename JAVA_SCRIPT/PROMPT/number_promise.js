let sum = (number) => {
  while (number >= 9) {
    let s = 0;
    while (number != 0) {
      s = s + number % 10;
      number = parseInt(number / 10);
    }
    number = s;
  }
  return number;
}

let conti = (num, work) => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(console.log(work(num)));
    }
    else {
      reject(console.log(num));
    }
  });
};


let n = 9898989898;
conti(n, sum);