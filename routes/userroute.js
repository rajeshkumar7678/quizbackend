const express=require("express")
const { usermodel } = require("../model/usermodel")

const userroute=express.Router()

userroute.get("/",(req,res)=>{
    res.send("userroute")
})


userroute.post("/login", async (req, res) => {
    try {
        const { name, email } = req.body
        console.log(req.body)
        const userpresent = await usermodel.findOne({ email })
        if (userpresent) {
            return res.status(400).send({"msg":"user already present","user":userpresent})
        }
        const newuser = new usermodel({ name, email })
        await newuser.save()
        res.status(200).send({"msg":"user added successfully!!","user":newuser})
        
    } catch (error) {
        console.log(error)
    }
})




module.exports={
    userroute
}