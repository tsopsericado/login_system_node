const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

app.post("/register", (req, res)=>{
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], {err, result} =>{
        
    })
})

app.listen(3001, ()=> {
    console.log("server running on port 3001")  
})