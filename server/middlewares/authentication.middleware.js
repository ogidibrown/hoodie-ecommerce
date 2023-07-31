const jwt = require('jsonwebtoken');
const authorization=async(req,res,next)=>{
if(req.method==='OPTIONS'){
    return next()
}
 try{
    const token= req.headers.authorization.split(' ')[1]
    if(!token){
         
        return next()
    }
    decodeToken = jwt.verify(token,`${process.env.JWT_SECRET_TOKEN}`)
    req.userData= {userId: decodedToken.id}
    next()
 }catch(e){ 
     return next(e)
 }
}




module.exports= authorization