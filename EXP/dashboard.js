// const express = require("express");
// const dashboard = dashboard.Router();
// dashboard.post("/", (req, res) => {
//     res.json({
//         "msg": "inside dashboard..."
//     });
// });

// module.exports=dashboard;

const dashboard=require("dashboard");
dashboard.get("/",(req,res)=>{
    res.write("Dashboard default method is done...");
    res.end();
});
dashboard.get("/dash",(req,res)=>{
    res.write("Dashboard dash method is done...!");
    res.end();
});

module.exports=dashboard;
