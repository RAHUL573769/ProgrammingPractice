const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

class UserController {
  static userRegistration = async (req, res) => {
    const { name, password, email, passwordConfirmation, tc } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (user) {
      res.send({ status: "failed", message: "Email Already Exists" });
    } else {
      if (name && password && passwordConfirmation && tc) {

        if (password === passwordConfirmation) {
          try {

            const salt=await bcrypt.genSalt(saltRounds);
            const hashPassword=await bcrypt.hash(password,salt);
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc
            });
            await doc.save();
            res.send("Data Added");
          } catch (error) {
            console.log(error);
    
          }
        }
        else{
            res.send({
                status: "failed",
                message: "Password And Confirm Pasword not matched"
              });
            
        }

     console.log(name,password,passwordConfirmation,tc);
      } else {
        res.send({ status: "failed", message: "All Fieds Are Mandatory" });
      }
    }
  };
}
module.exports=UserController;