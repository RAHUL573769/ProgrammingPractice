const mongoose = require('mongoose');


const userSchema=mongoose.Schema(

    {

        userName:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            unique:true
        }
    }
);

const User=mongoose.model("user",userSchema);
module.exports=User;