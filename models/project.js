const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
name:{
    type:String,
    requires:true
},
description:{
    type:String,
    requires:true
},
author:{
    type:String,
    requires:true
},
issues:[{
    type:mongoose.Types.ObjectId,
    ref:"Issue"
}],
})
const Project=mongoose.model('Project',projectSchema)
module.exports=Project