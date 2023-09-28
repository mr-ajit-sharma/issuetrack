const Project = require("../../models/project")

const home=async(req,res)=>{
try {
const project=await Project.find().populate('issues')
    res.render('home',{
        title:"Home",
        projects:project
    })
} catch (error) {
    console.log("internal error in home ")
}
}
module.exports={home}