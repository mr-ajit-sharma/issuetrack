const Project=require('../../models/project')
const Issue=require('../../models/issue')
const createIssue=async(req,res)=>{
    try {
        const projectId=req.params.id
        const issue=await Issue.create({
            title:req.body.title,
            description:req.body.description,
            labels:req.body.labels,
            author:req.body.author
        })
        
        const project=await Project.findById(projectId)
        if(project){
            project.issues.push(issue._id)
            await project.save()
        }
        return res.redirect('back')
    } catch (error) {
        console.log(error,"internal system error in issue form")
    }
}

const issuePage=async(req,res)=>{
    try {
        const issue=Issue.find({})
        
        return res.redirect('/',issue)        
    } catch (error) {
        console.log(error,"internal system error in issuepage")
    }
}

const filterIssue=async(req,res)=>{
    try {
        const projectId=req.query.projectId
        const filter=req.query.filter
        let project=await Project.findById(projectId)
        // const issueId=Issue.find(req.params.id)
        await project.populate("issues")
        await  project.save()
        res.render('projectPage',{project,title:"Filter Issues",filter,search:""})
        
    } catch (error) {
        console.log(error)
    }
}

const searchIssue=async(req,res)=>{
    try {
        let projectId=req.query.projectId;
        let project=await Project.findById(projectId)
        .populate('issues')
        let search =req.body.searchValue
        res.render('projectPage',{
            project,
            search,
            title:"Search Issue",
            filter:"all"
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports={searchIssue,filterIssue,issuePage,createIssue}