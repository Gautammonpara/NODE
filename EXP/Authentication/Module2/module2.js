// const express = require("express");
// const tokenObj = require("../Token/token");
// module2 = express.Router()

// module2.get("/",(req,res)=>{
//     const headToken = req.headers.token;
//     if(headToken == tokenObj.token)
//     {
//         res.json({"msg":"inside module2 success","token":tokenObj.token});
//     }
//     else
//     {
//         res.json({"msg":"fail in module2"});
//     }
// });

// module.exports = module2;

const express=require("express");
const middleware=require("../middleware/middleware");
const tokenObject = require("../Token/token");
module2=express.Router();

module2.post("/",[middleware],(req,res)=>{
    res.json({"msg":"inside module1 success"});
});

module.exports = module2;