const {Router}=recuire('express');
const bcrypt=require('bcrypt');
const User=require('../moduls/UserShema');
const {check,validationResult}=require('express-validator')
const router=Router();
const jwt=require('jsonwebtoken');
const config=require('../config')
//   /api/auth/register
router.post('/register',
[
check('email','incorrect email').isEmail(),
check('name','minimu size of pass is 1 symbol').exists(),
check('password','minimu size of pass is 6 symbols').isLength({min:6})
],
async(req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'incorrect data'
            })
        }
        const {email,name,password}=req.body
        await User.findOne({email},(err,user)=>{
            if(user || err){
              return res.status(400).json('this email is already registered in the system')
          }})
        const hashedPassword=await bcrypt.hash(passwors,12)
        const user = new User({email,name,password:hashedPassword})
        await user.save()
        res.status(201).json({message:'the user was created'})

    }catch(e){
        res.status(500).json({message:"server error"})
    }
})
//   /api/auth/login
router.post('/login',
[
    check('email','incorrect email').normalizeEmail().isEmail(),
    check('password','incorrect password').exists()
],
async(req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'incorrect data'
            })
        }
        const {email,password}=req.body
        await User.findOne({email},(err,user)=>{
            if(!user || err){
              return res.status(400).json('user is not found')
          }})
          const isCorrect = await bcrypt.compare(password,user.password)
          if (!isCorrect){
              return res.status(400).json({message:'incoract data'})
          }
          const token =jwt.sign(
              {userId:user.id},
              config.get('jwtSecretKey'),
              {expiresIn:'1h'}
          )
          res.json({token,userId:user.id})
        

    }catch(e){
        res.status(500).json({message:"server error"})
    }
})

module.exports=router;