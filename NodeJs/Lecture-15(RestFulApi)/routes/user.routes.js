const express = require('express');
const router=express.Router();
const path = require('path');


router.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"../","views",'index.html'))

})
router.get("*",(req,res)=>{
    res.status(404).send("<h1>404 Not Found</h1>")
})

module.exports=router;