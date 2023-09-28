require('dotenv').config()
const express=require('express')
const port=8002 || process.env.PORT;
const app=express()
const db=require('./config/mongoose')
const expressLayouts=require('express-ejs-layouts')

// setting up the template engine 
app.set("layout");
app.use(expressLayouts)
app.set('view engine','ejs')
app.set('layout','./layouts/main')

// using static files
app.use(express.static('public'))


app.use(express.json());
app.use(express.urlencoded({extended:true}))

// using router
app.use('/',require('./server/routers/index'))

// listening on the port 
app.listen(port,()=>{
    console.log(`server is connected on the port ${port}`)
})
