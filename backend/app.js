const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
const app = express();

const db = 'mongodb+srv://arun:arunpatel@cluster0.sbxag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(db , { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log(`connection successful`);
})
.catch((error)=>{
    console.log(error);
})

const userschema = new mongoose.Schema({
    name: {
      type: String,
    },
    skill: {
      type: String,
    },
    status : {
        type: String,
        default : "pending",
    },
    date: {
        type : Date,
        default : Date.now,
  
    }
  });
  
  const userdata = new mongoose.model("userdata" , userschema);

app.use(cors())
app.use(express.json());

app.post("/add" , async(req , res)=>{
    try {
        const data = await userdata.create(req.body)
        res.json({"success" : true , data})
    } catch (error) {
        console.log(error)
        res.json({"success" : false , "error" : "server error"})
    }
})

app.post("/update" , async(req , res)=>{
    try {
        const data = await userdata.update({ _id: req.body.id } , {status : req.body.status})
        res.json({"success" : true , data})
    } catch (error) {
        res.json({"success" : false , "error" : "server error"})
    }
})

app.get("/get" , async(req , res)=>{
    try {
        const data = await userdata.find();
        res.json({"success" : true , data})
    } catch (error) {
        res.json({"success" : false , "error" : "server error"})
    }
})

app.listen(5000 , ()=>{
    console.log("app is listining at port 5000")
})