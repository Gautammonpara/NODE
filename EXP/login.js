// const express = require("express");
// login = express.Router();
// login.get("/", (req, res) => {
//     res.json({ "msg": "inside login..." });
// });
// login.post("/postlogin", (req, res) => {
//     res.json({ "msg": "inside post login..." });
//     console.log(req.body.uname);
//     console.log(req.body.password);

//     if(req.body.name==req.body.password)
//     {
//         // console.log("Done...");
//         const dashboard=require("./dashboard");
//         login.use("/dashboard",dashboard);
//     }
// });
// module.exports=login;

const express = require("express");
const login = express.Router();
login.get("/", (req, res) => {
    res.write("Login default mathod is done...");
    console.log("2nd is done...");
    res.end();
});
login.post("/postlogin", (req, res) => {
    res.write("Login post method is done...");
    res.end();
    console.log(req.body.uname);
    console.log(req.body.password);
    if (req.body.uname == req.body.password) {
        console.log("Both are same...!!");
    }
    else
    {
        console.log("sorry");
    }
});


module.exports = login;