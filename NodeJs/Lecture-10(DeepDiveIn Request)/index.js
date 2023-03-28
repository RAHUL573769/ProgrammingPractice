const express = require('express');

const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req,res)=>{
    const id=req.query.id;
    res.send("Hello ");
    console.log(id);
})
app.post("/users",(req,res)=>{
console.log(req.body.name);
})
app.get("/user/:id/age/:age",(req,res)=>{
    const id=req.params.id;
    console.log(req.params.age);

    res.send(`Student id is ${id}`)
    console.log(id);
})

app.listen(3000,(req,res)=>{
    console.log("Server Running");

})