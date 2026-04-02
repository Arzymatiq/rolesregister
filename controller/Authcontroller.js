class Authcontroller{
    async register(req,res){
        try{

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

        }catch(e){
            console.log(e);
            res.status(400).json({massage:e})
        }   
    }
}

export default new Authcontroller()