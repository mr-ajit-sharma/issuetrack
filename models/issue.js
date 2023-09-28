const mongoose=require('mongoose')
const issueSchema=new mongoose.Schema({
title:{
    type:String,
    requires:true
},
description:{
    type:String,
    requires:true
},
labels:{
    type:String,
    // required:true
},
author:{
    type:String,
    requires:true
}
})
const Issue=mongoose.model('Issue',issueSchema)
module.exports=Issue