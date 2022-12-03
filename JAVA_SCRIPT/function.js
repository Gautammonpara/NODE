// .....TYPE OF FUNCTION.....

// 1.NAMED FUNCTION

// 1.
// function fun_one(){

//     return "hello";
// }
// function fun_two(){
//     return fun_one();
// }
// console.log(fun_two())

// // 2.
// function fun_one(a1,a2,a3){
//     console.log(a1,a2,a3);
// }
// function fun_two(){
//     return "hello_1";
// }
// function fun_three(){
//     return "hello_2";
// }
// function fun_four(){
//     return "hello_3";
// }
// fun_one(fun_two,fun_three,fun_four)

// function funone(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3);
// }
// funone("GAUTAM","7SEEAS","LPM");
// funone("GAUTAM","LPM");
// funone("GAUTAM","7SEEAS");
// funone("GAUTAM","                   ","7SEEAS");
// funone();
// funone(null,undefined);
// funone(null,null,null);
// funone([],{});
// funone(null,{},[]);

// function funzero()
// {
//     console.log("inside funzero() ");
//     return "Hello"
// }
// function funone()
// {
//     return funzero();
// }
// console.log(funone())
// funone();

// function zero()
// {
//     console.log("INSIDE ZERO() ");
//     return "Hello...";
// }
// function one()
// {
//     console.log("INSIDE ONE() ");
//     return zero();
// }
// function two()
// {
//     console.log("INSIDE TWO() ");
//     return one();
// }
// console.log(two());

// function one()
// {
//     console.log("NNILLLL")
//     return "hello";
// }
// function two()
// {
//     return one;
// }
// console.log(two()());

// function fun_one(a1,a2,a3){
//     // console.log(a1,"\n",a2,a3);
//     console.log(a1(),a2(),a3());
// }
// function fun_two(){
//     return "hello_1";
// }
// function fun_three(){
//     return "hello_2";
// }
// function fun_four(){
//     return "hello_3";
// }
// fun_one(fun_two,fun_three,fun_four)

// let op=(n)=>{
//     console.log(n)
// }
// op(10)

// let op=()=>{
//     return 'hello'
// }
// console.log(op())
// console.log(qp=()=>{return '10'});
// console.log(qp())
// let op=(n)=>`hello ${n}`;
// console.log(op(10))

// let op=()=>{
//     return ()=>{
//         console.log('op');
//         return()=>{
//             return 'hello';
//         }
//     }
// }
// console.log(op()()());

// let two=()=>'hello two';
// let one=(n,m,p)=>{
//     // console.log(n());
//     console.log(n(),m(),p());
// }
// one(()=>{return 'hello_1'},two,()=>"hello_3")

// console.log(()=>{});
// let one=()=>{

//     return "hello"
// }
// console.log(one())


// let one=(str)=>`GAUTAM ${str}`
// console.log(one("NIL"));

// let one=()=>{
//     return ()=>{
//         return ()=>{
//             return ()=>{
//                 return "GAUTAM"
//             }
//         }
//     }
// }
// console.log(one()()()())


// let two=()=>"hello_2"
// let one=(a1,a2,a3)=>{
//     // console.log(a1);
//     console.log(a1(),a2(),a3());
//     return "GN"
// }
// // one(()=>{return "NILA"},two,()=>"GAVU");
// console.log(one(()=>"H1",()=>"H2",()=>"H3"))

// DEFAULT PARAMETER IN FUNCTION

// function one(arg1="1",arg2="2")
// {
//     console.log(arg1,arg2);
// }
// one(undefined,undefined)


// REST FUNCTION

// function one(arg1,...arg2)
// {
//     console.log(arg1)
//     console.log(arg2)
// }
// one()
// one("hello")
// one("hello","hello")
// one("h1","h2","h3")
// one(undefined,undefined)
// one(undefined,null)