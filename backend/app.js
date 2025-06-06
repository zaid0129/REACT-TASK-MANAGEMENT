const express= require("express")
const app=express()
require("dotenv").config()
const mongoose=require("mongoose")

const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT || 8000;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("ATLAS DATABASE ESTABLISHED")
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})