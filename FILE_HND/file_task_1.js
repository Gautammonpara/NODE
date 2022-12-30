const fs=require("fs");
fs.readFile("write.txt","utf8",(err,data)=>{
    if(err) console.log(err);
    else fs.writeFile("task1.txt",data,"utf8",(err)=>{
        if(err) console.log(err);
    })
})