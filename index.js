const express=require('express')
const cors=require('cors');
const app=express();
const User=require('./config.js');
app.use(cors());
app.use(express.json());


 app.post("/create",async(req,res)=>{
    const data=req.body
    console.log(data)
    await User.add(data)    
    res.send({msg:data})

 }
    )

app.get("/data",async(req,res)=>{
    const data=await User.get().docs
    res.send(data)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
}   )
