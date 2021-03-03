const express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json());

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Narnia12321232!",
    database: 'blog'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/blog', (req, res) => {
    con.query("SELECT * FROM posts", function (err, result) {
        if (err) throw err;
        res.render("blog", { result: restult })
    });
})


app.listen(3000, () => {
    console.log("Running on port 3000")
});