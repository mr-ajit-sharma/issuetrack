const homeController=require('../controllers/homeController')
const express=require('express')
const router=express.Router()
router.get('/',homeController.home)
router.use('/project',require('./project'))
router.use('/issue',require('./issue'))

module.exports=router