// 6. Write a JS function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

let check = (str) => {
   let lg=str.sort((a,b)=>{
    return a.length-b.length;
   })
   return lg[0]
}
s = "Gautam Monpara Balubhai"
sp = s.split();
console.log(check(sp))
// console.log(sp)