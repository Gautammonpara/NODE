const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    console.log("come in default...!");
});
// app.get("/singup", (req, res) => {
//     let query = req.query;
//     console.log(query);
//     console.log(query.uname);
//     console.log(query.upwd);
//     res.json({
//         "username": "id",
//         "password": "upwd"
//     });
app.get("/go/:uname/:upwd", (req, res) => {
    let query = req.params;
    console.log(query);
    console.log(query.uname);
    console.log(query.upwd);
    res.json({
        "username": "id",
        "password": "upwd"
    });
});
app.listen(4700, () => {
    console.log("Run on the....!");
})