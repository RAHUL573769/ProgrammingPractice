const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser=require("body-parser");

const PORT=process.env.PORT ||3000;
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:true}));

app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`)
})



