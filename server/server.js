const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserModel = require("./modules/Users");
const ResultModel = require("./modules/Results");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Login");

app.post("/signup", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("no record exist");
    }
  });
});
/*
app.get("/search", (req, res) => {
  const NIC = req.query.search;

  if (!NIC) {
    return res.status(400).json({ message: "NIC parameter is required" });
  }

  UserModel.find({ NIC })
    .then((users) => {
      if (users.length === 0) {
        res.status(404).json({ message: "No users found" });
      } else {
        res.json(users);
        res.json("user exisist");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});
*/
// Check if the user with the given NIC exists
app.get("/search", async (req, res) => {
  const NIC = req.query.search;
  UserModel.find({ NIC }).then((users) => {
    if (users.length === 0) {
      res.json(1);
    } else {
      res.json(users);
    }
  });
});
//create an user
app.post("/setUser", async (req, res) => {
  UserModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
//create a result
app.post("/setResult", async (req, res) => {
  ResultModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//finding existing user
app.get("/getUser", async (req, res) => {
  const nic = req.query.getUser;
  UserModel.find({ NIC: nic })
    .then((users) => {
      if (users.length === 0) {
        res.json(1);
      } else {
        res.json(users);
      }
    })
    .catch((err) => res.json(err.message));
});

//delete an user
app.delete("/delUser", async (req, res) => {
  const delUser = req.query.delUser;
  console.log(delUser);
  UserModel.findByIdAndDelete(delUser)
    .then((data) => {
      console.log(data);
      res.json("user removed sucessfuly");
    })
    .catch((err) => res.json(err.message));
});

//set nic for result
app.get("/nicSet", (req, res) => {
  const nic = req.query.nic;
  UserModel.find({ NIC: nic }).then(ResultModel);
});
app.listen(3001, () => {
  console.log("server running on port no:3001");
});
