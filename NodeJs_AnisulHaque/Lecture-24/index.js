require('dotenv').config();
const express = require('express');
const bodyParser=require("body-parser");
const cors = require('cors');
const PORT=process.env.PORT||3000;
const mongoose = require('mongoose');
const connectDb=require("./config/database")

const app=express();


const User=require("./models/userModel");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render('index');
})
//register get
app.get("/register",(req,res)=>{
    res.render("register")
})

    
    
app.post("/register",async(req,res)=>{
    try {
   
const user=await User.findOne({userName:req.body.username});
// console.log(req.body.username)
// console.log(req.body.password)
if(user){
   return res.send("User Already Exists");
}
else{
  const newUser=new User({

userName:req.body.username,
password:req.body.password


  });
    await newUser.save();
    res.redirect('/login');;

}
  


    } catch (error) {
      res.status(500).send(error.message);
      console.log("Erroe")  
    }
})
//mongosse connection

//login get
app.get("/login",(req,res)=>{
    res.render("login")
})
//logour get
app.get("/logout",(req,res)=>{
    res.redirect('/');
})

app.post("/login",(req,res)=>{
    try {
        res.status(200).send("User is logged In");
    } catch (error) {
      res.status(500).send(error.message);  
    }
})


//protected profile

app.get("/profile",(req,res)=>{
    res.render("profile")
})

app.listen(PORT,()=>{
    connectDb();
    console.log("Port Running");
})