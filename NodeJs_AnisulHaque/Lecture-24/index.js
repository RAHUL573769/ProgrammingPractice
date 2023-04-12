require('dotenv').config();
const express = require('express');
const bodyParser=require("body-parser");
const cors = require('cors');
const PORT=process.env.PORT||3000;
const mongoose = require('mongoose');


const app=express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.set("view engine","ejs");
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db Connected")
}).catch((error)=>{
    console.log(error.message);
});
app.get("/",(req,res)=>{
    res.render('index');
})
//register get
app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",(req,res)=>{
    try {
        res.status(200).send("User is Registerd In");
    } catch (error) {
      res.status(500).send(error.message);  
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
    console.log("Port Running");
})