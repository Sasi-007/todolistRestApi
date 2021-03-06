const express=require("express");
const router=express.Router();
const { check, validationResult } = require('express-validator');
//controllers
const {signup,signin,signout}=require("../controllers/auth");
router.post("/signup",[
    check("name","name should be atleast 3 charecters").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be at least 8 char").isLength({min:8})
],signup
);

router.post("/signin",[
    check("email","email is required").isEmail().isLength({min:1}),
    check("password","password is required").isLength({min:1})
],signin);

router.get("/signout",signout);

module.exports=router;