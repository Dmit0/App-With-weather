const {Router}=require('express')
const City=require('../models/City')
const router=Router()
const auth=require('../middleware/auth_middleware')
const config=require('config')

router.post('/add',auth,async (req,res)=>{
    try{
        //const baseURL=config.get('baseURL')
        const CitySave={
            id:req.body.id,
            name:req.body.name,
            coordinates:req.body.coordinates
        }
        const exist = await City.findOne({id:CitySave.id})
        

        const city = new City({
            id:CitySave.id,name:CitySave.name,coordinates:CitySave.coordinates,owner:req.user.userId
        }) 

        await city.save()      
        res.status(201).json({message:"city was saved"})

    }catch(e){
        res.status(500).json({message:"server error"})
    }
})

router.post('/remove',auth,async(req,res)=>{
    const id=req.body.id


   try  {
       await City.deleteOne({id:id,owner:req.user.userId})
       res.status(201).json({message:"el was deleted"})
    }
   catch(e){console.log(35 + e.message)}

})

router.get('/',auth,async(req,res)=>{
    try{
        const cities=await City.find({owner:req.user.userId})
        res.json(cities)
    }catch(e){
        res.status(500).json({message:"server error"})
    }
})


module.exports=router