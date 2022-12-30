const fs = require("fs");
fs.unlink("fun.txt", (err) => {
    if (err) console.log(err);
    else console.log("file removing done...!!!")
})