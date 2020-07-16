const {Schema,model,Types}=require('mongoose')

const LinkSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    coordinates:{
        type:Object,
        required:true
    },
    owner:{type:Types.ObjectId,ref:'User'}
})
module.exports=model("City",LinkSchema)