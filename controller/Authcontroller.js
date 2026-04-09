import Role from "../model/Role.js";
import User from "../model/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

function generateAccessToken(id,role){  
    const payload = {
        id,
        role
    }
    return jwt.sign(payload,process.env.secret_key ,{expiresIn:"24h"})
}


class Authcontroller{
    async register(req,res){
        try{
            const {username,password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({message:"такой пользователь уже сущ"})
            }
            const hashPassword = bcrypt.hashSync(password,3)
            const userRole = await Role.findOne({value:"USER"})
            const user = new User({username, password:hashPassword, role:[userRole.value]})
            await user.save()
            return res.json({message:"user is created"})
        }catch(e){
            console.log(e);
            res.status(400).json({massage:"error in register"})
        }   
    }
    async login(req,res){
        try{
            const {username,password} = req.body
            const candidate = await User.findOne({username})
            if(!candidate){
                return res.status(400).json({message:"такого пользователя нет"})
            }
            const validPassword = bcrypt.compareSync(password,candidate.password)
            if(!validPassword){
                return res.status(400).json({message:"invaid password"})
            }
            const token = generateAccessToken(candidate._id, candidate.role)
            return res.json({token})
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