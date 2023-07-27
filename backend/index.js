const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
user: "root",
host: "localhost",
password: "password",
database: "LoginSystem",
});

app.post("/register", (req, res)=>{
const username = req.body.username;
const password = req.body.password;

db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) =>{
});
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
    if ( err) {
        res.send({err: err});
    }

    if (result){
        res.send({message: "wrong username/password combination"});
    }
    }
  );
});


app.listen(3000, ()=> {
console.log("server running on port 3001") 
})