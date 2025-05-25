const express=require("express")
const route=express.Router()
const stuController=require("../Controllers/stuControllers")
route.get("/home",stuController.homePage)
route.get("/display",stuController.displayData)
route.post("/save",stuController.studentSave)

module.exports= route