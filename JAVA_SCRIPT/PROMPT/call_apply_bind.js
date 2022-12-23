let student = {
    name: "Gautam",
    age: 19,
    course: "C++",
};
let student1 = {
    name: "Monpara",
    age: 100,
    course: "nature"
};
let student2 = {
    name: "Harsh",
    age: "undefined",
    course: "navribazar"
};
let getname= function (a1,a2,a3) {
    console.log(this.name+"-"+a1+"-"+a2+"-"+a3);
};
// student.getname.call(student2)

// CALL
getname.call(student2,"SURAT","GUJARAT","INDIA");

// APPLY
getname.apply(student2,["SURAT","GUJARAT","INDIA"]);

// BIND  
let calling=getname.bind(student2,"SURAT","GUJARAT","INDIA");
calling();
