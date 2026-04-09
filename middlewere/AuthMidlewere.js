import jwt from 'jsonwebtoken'
export default function(req,res,next){
    if(req.method == "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1] 
            if(!token){
                res.status(403).json({message:"пользователь не авторизован "})
            }
        const decode = jwt.verify(token, process.env.secret_key)
        req.user = decode
        next()
    }catch(e){
        console.log(e);
        res.status(403).json({message:"пользователь не авторизован"})
    }
}