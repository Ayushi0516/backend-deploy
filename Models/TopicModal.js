const mongoose=require("mongoose");


const topicSchema=new mongoose.Schema({
    topic_name:String,
})

const TopicModel=mongoose.model("add",topicSchema)


module.exports={
    
  TopicModel,
   
}