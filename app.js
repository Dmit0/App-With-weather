const express=require('express')
const config=require('config')
const mongoose = require('mongoose')



const app=express();

app.use('/api/auth',require(''))

const PORT=config.get('port')||5000;

async function start(){
    try{
        await mongoose.connect(config.get("mongoURL"),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true

        })
        app.listen(PORT,()=>{
    console.log(`server was started ${PORT}`)
})
    }catch(e){
        console.log('server error',e.message)

    }
}
start();


