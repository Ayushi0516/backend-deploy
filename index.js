const express=require("express")
// require('dotenv').config()
const {connection} = require("./config/db.js")
const {topicRouter}= require("./Routes/topic.routes")

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/resume",topicRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("success")
    }
    catch(err){
        console.log("failed")
        console.log(err)
    }
   console.log("started at 8080")
   
})