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
    cities:[{type:Types.ObjectId,ref:'City'}]
})
module.exports=model("User",UserSchema)