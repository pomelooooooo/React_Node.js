const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { request } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "findjob",
});

app.get("/user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const tel = req.body.tel;
  const mail = req.body.mail;
  const type = req.body.type;
  //   const resume = req.body.resume;
  const address = req.body.address;

  db.query(
    "INSERT INTO  user (first_name, last_name, age, tel, mail, type, address) VALUES(?,?,?,?,?,?,?)",
    [first_name, last_name, age, tel, mail, type, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const tel = req.body.tel;
  const mail = req.body.mail;
  const type = req.body.type;
  const address = req.body.address;
  db.query(
    "UPDATE user SET first_name = ?,last_name = ?,age = ?,tel = ?,mail = ?,type = ?,address = ? WHERE id = ?",

    [first_name, last_name, age, tel, mail, type, address, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM user WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
