const fs=require("fs");
fs.stat("read.txt",(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})