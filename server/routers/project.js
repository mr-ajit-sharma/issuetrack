const express=require('express')
const { getProjectForm, postProjectForm, projectPage } = require('../controllers/projectController')
const router=express.Router()
router.get('/',getProjectForm)
router.post('/create',postProjectForm)
router.get('/:id',projectPage)
module.exports=router