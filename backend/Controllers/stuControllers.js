const stuModels = require("../Modles/stuModels")

const homePage=(req,res)=>{
  console.log("iam homePage fnc")
  res.send("ok")
}
const studentSave=(req,res)=>{
 const{rollno,name,city,fees}=req.body 
const student=stuModels.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})
res.send({msg:"iam from backend",myData:student})
}
const displayData=async(req,res)=>{
  const Data=await stuModels.find()
  res.send(Data)
}
module.exports={
    homePage,studentSave,displayData
}