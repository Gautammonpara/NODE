const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.write("My Name Is Gautam Monpara...!!!");
    res.end();
    console.log("connect");
});
app.post("/login",(req,res)=>{
    res.write("My Name Is Nilam Mandani...!!!");
    res.end();
    console.log("connect");
});
app.listen(1010,()=>{
    console.log("Run on way....");
})