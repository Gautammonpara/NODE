const http = require("http")
const server = http
.createServer((req,res)=>{
res.write("<h1><b>HELLO</b></h1>")
console.log("connected");
res.end();
})
.listen(4044,()=>{
    console.log("Server Connected on port 4044");
});