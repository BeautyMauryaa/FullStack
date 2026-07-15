import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import user from "./models/user.js";

exports.sighup = (req, res) => {
  const User = new user({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
  });

  User.save((err, User) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
    } else {
      res.status(200).send({
        message: "User Registered successfully",
      });
    }
  });
};

exports.login = (req, res) => {};
