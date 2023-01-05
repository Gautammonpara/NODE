const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.post("/login",(req,res)=>{
    const requst=req.body;
    console.log("Data ",requst);
});
app.listen(5100,()=>{
    console.log("Run ...!!!");
});