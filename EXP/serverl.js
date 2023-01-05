// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//     res.json({
//         "msg": "hello"
//     });
// });
// const login = require("./login");
// app.use("/login", login);
// app.listen(3100, () => {
//     console.log("server on run.... ");
// });

const express=require("express");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    console.log("1st done..!!!");
    let query=req.query;
    console.log(query);
    console.log(query.uname);
    console.log(query.password);
    res.json({"username":"uname","pass":"password"});
});
// const login=require("./login");
// app.use("/login",login);

app.listen(3500,()=>{
    console.log("Run ....!!!!");
});