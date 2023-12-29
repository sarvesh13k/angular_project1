const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const model = require('./db.js')

app.use(bodyparser.json())
app.use(cors())

// app.get('/', function (req, res){
//     //res.send("Hello World")
//     model.find().then(p=>res.send(p)).catch(err=>console.log(err))
// })

app.post("/", (req, res)=>{
    const data = new model({
        "fname":req.body.fname,
        "lname":req.body.lname,
        "password":req.body.password
    })
    data.save().then(p=>res.send({"message":"data saved"})).catch(err=>console.log(err))
})

app.post("/login", (req, res)=>{
    model.find({"fname":req.body.username}).then(p=>{
        if(p[0].fname===req.body.username && p[0].password===req.body.password){
            res.send({"msg":"successfully login"})
        }
        else{
            res.send({"msg":"login failed"})
        }
    }).catch(err=>res.send({"msg":"invalid user"}))
})

app.listen(3700, (err)=> {
    if(!err){
        console.log("Server on")
    }
})
