import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/router.js";
dotenv.config()
const app = express()
app.use(express.json())
app.use("/auth", router)
async function start() {
    try{
        const PORT = process.env.PORT || 7000
        const db_URL = process.env.db_URL

        await mongoose.connect(db_URL)
        app.listen(PORT, () => {
            console.log(`server work on http://localhost:${PORT}`);
        })
    }catch(e){
        throw new Error(e)
    }
}
start()