// require('dotenv').config()   
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO)
const db=mongoose.connection
db.on('error',(error)=>{
    console.log(error,"error in connection" )
})
db.once('open',(err)=>{
    if(err){
        console.log("error in connection")
    }
    console.log("server is connected to the database")
})
module.exports=db