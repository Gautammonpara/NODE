const fs = require("fs");
fs.copyFile("readsync.txt", "writesync.txt", (err) => {
    if (err) console.log(err);
});