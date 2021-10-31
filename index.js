const mysql = require('mysql');
const express = require('express');
const app = express()

app.listen('3000', () => {
    console.log("server listening at port 3000")
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "900316BobLouis",
    database: "dog_data"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "SELECT * FROM breeds WHERE name = 'poodle';";
//     db.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result[0]);
//     });
// });



app.get("/", async (req, res) => {
    res.json({ status: "Bark bark! Ready to ROLL!" });
});

app.get("/:breed", async (req, res) => {
    const query = `SELECT * FROM breeds WHERE name = '${req.params.breed}'`;
    db.query(query, (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not found!" });
        } else {
            res.json(results[0]);
        }
    });
});







