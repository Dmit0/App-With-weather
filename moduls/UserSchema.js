const {Schema,model,Types}=require('mongoose')

const UserSchema  = new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    links:[{type:Types.ObjectId,ref:'Cities'}]
})
module.exports=model("user",UserSchema)