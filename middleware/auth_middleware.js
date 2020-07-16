const jwt=require('jsonwebtoken');
const config=require('config')

module.exports=(req,res,next)=>{
    
    if(req==='OPTIONS'){
        return next
    }
    try{
        
        const token=req.headers.authorization.split(' ')[1]
       
        if(!token){
            res.status(401).json({message:'no token'})
            return
        } 

        const decoded =jwt.verify(token,config.get('jwtSecretKey'))
        //console.log(decoded)  
        req.user=decoded
        next()
    }catch(e){
        res.status(401).json({message:'error during execution '})
    }
}  