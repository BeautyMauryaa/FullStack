const express = require("express");
const router = express.Router();
const app=express();
app.use(express.json());

//auth midleware

const authcheck = (req, res, next) => {
  //     const token=req.headers.authorization;
  //     console.log("inside the authorization middleware");
  //     if(!token){
  //       return res.status(401).json({message: "provide token"});
  //     }
  //     next();
  // };

  console.log("inside the authorization");
  req.user = { userID: 1, role: "student" };
  if (req.user.role) {
    next();
  } else {
    res.json({
      success: false,
      message: "not valid user",
    });
  }
};

const student = (req, res, next) => {
  console.log("inside the student middleware");
  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: "false",
      message: "user is not student",
    });
  }
};

const admincheck = (req, res, next) => {
  console.log("inside the admin middleware");
  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: "false",
      message: "user is not admin",
    });
  }
};


//routes:
router.get("/student", authcheck, student, (req,res)=>{
    console.log("inside student dashboard");
    res.send("student specific page");
})

router.get("/admin", authcheck,admincheck,(req,res)=>{
console.log("inside admin page");
res.send("admin specific page");
});

module.exports = router;