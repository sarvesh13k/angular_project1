const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/backend").then(p=>console.log("Connected Sucessfully")).catch(err=>console.log(err))

const schema = mongoose.Schema({
    "fname": String,
    "lname": String,
    "password":String
}
)

const model = mongoose.model('Students2', schema)
model.find().then(p=>console.log(p)).catch(err=>console.log(err))
module.exports=model