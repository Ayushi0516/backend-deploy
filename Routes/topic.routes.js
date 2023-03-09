const {Router}=require("express")
const {TopicModel}= require("../Models/TopicModal")

const topicRouter =Router();


topicRouter.get("/",async(req,res)=>{
    const result=await TopicModel.find();
    res.send(result)
  })
  
  topicRouter.post("/addResume",async(req,res)=>{
      const payload=req.body;
      const new_topic=new TopicModel(payload)
      await new_topic.save()
    //   res.send("done")
      res.send(new_topic)
  })
  

  module.exports={
    topicRouter
  }