const express = require('express');

const app=express();

app.get("/",(req,res)=>{
    const id=req.query.id;
    console.log(id);
})
app.get("/user/:id/age/:age",(req,res)=>{
    const id=req.params.id;
    console.log(id);
})

app.listen(3000,(req,res)=>{
    console.log("Server Running");
})