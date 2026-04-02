import Role from "../model/Role.js";
import User from "../model/User.js";

class Authcontroller{
    async register(req,res){
        try{
            const {username,password} = res.body
            const candidate = User.findOne({username})
            if(candidate){
                return res.status(400).json({message:"такой пользователь уже сущ"})
            }

            
        }catch(e){
            console.log(e);
            res.status(400).json({massage:"error in register"})
        }   
    }
    async login(req,res){
        try{

        }catch(e){
            console.log(e);
            res.status(400).json({massage:"error in login"})
        }   
    }
    async getAllUser(req,res){
        try{

        }catch(e){
            console.log(e);
            res.status(400).json({massage:e})
        }   
    }
    async createRoles(req,res){
        try{
            const user = new Role()
            const admin = new Role({value:"ADMIN"})
            await user.save()
            await admin.save()
        }catch(e){
            console.log(e);
            res.status(400).json({massage:e})
        }   
    }
}

export default new Authcontroller()