const express=require("express")
const { connection } = require("./config/db")
const { userroute } = require("./routes/userroute")
const cors=require("cors")
const { quizroute } = require("./routes/quizroute")

const app=express()
app.use(express.json())
app.use(cors())
const port= 9696

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userroute)
app.use("/quiz",quizroute)







app.listen(port,async()=>{
    try {
        await connection
        console.log("db is connecetd")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})