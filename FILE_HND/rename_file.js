const fs = require("fs");
fs.rename("writesync.txt", "readsync.txt", (err) => {
    if (err) console.log(err);
    else console.log("file rename is done...!!!");
});