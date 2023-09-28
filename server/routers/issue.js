const express=require('express');
const { issuePage, createIssue, filterIssue,searchIssue } = require('../controllers/issueController');
const router=express.Router();
router.get('/',issuePage)
router.post('/createIssue/:id',createIssue)
router.get('/filter',filterIssue)
router.post('/search',searchIssue)
module.exports=router;