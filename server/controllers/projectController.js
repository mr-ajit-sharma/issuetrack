const Project = require('../../models/project')
const getProjectForm=async(req,res)=>{
try {
    
return res.render('projectForm')
} catch (error) {
    console.log(error,"internal system error in project ")
}
}


const postProjectForm=async(req,res)=>{
try {
    const project=await Project.create({
        name:req.body.name,
        description:req.body.description,
        author:req.body.author
    })
    // await project.save()
return res.redirect('/')
} catch (error) {
    console.log(error,"internal system error in project ")
}
}


const projectPage=async (req,res)=>{
    try {
const project=await Project.findById(req.params.id)
        await project.populate('issues')
       return res.render('projectPage',{
        title:"Project",
        project,
        filter:"all",
        search:""
       })
    } catch (error) {
        console.log(error,"internal system error in the project page")
    }
}


module.exports={getProjectForm,projectPage,postProjectForm}