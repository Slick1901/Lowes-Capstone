const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "Capstone",
});

app.post('/register', (req, res)=>{
	const email = req.body.email;
	const password = req.body.password;


	db.query(
		"INSERT INTO users (email, password) VALUES (?,?)",
		[email, password],
		(err, result)=>{
			if (err) {
				console.log(err);
			} else {
				console.log(result);
			}
		}
	);
});

app.post('/login', (req,res)=>{
	const email = req.body.email;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE email = ? AND password = ?",
		[email, password],
		(err, result)=>{
			if (err) {
				res.send({err: err});
			} 
				if(result.length > 0) {
					res.send(result)
				} else
				res.send({message: "Wrong email/password combination"});
		}
	);
}) 

app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message= req.body.message;
  console.log("register was called")
    db.query(
      "INSERT INTO contact (name, email, number, message) VALUES (?,?,?,? )",
      [name, email, number, message],
      (err, result) => {
        if (err) {
          console.log("event inserting: error " + err); 
          res.status(500).send({ message: "Internal server error" });
        } else {
          console.log("event inserting success : " + result);
          res.status(200).send({ message: "Event registered successfully" });
        }
      }
    );
  });  

  app.post('/news', (req, res)=>{
	const email = req.body.email;
	
	db.query(
		"INSERT INTO news (email) VALUES (?)",
		[email],
		(err, result)=>{
			if (err) {
				console.log(err);
			} else {
				console.log(result);
			}
		}
	);
});
app.listen(3001, ()=>{
	console.log("running server")
})