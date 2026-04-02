import { Router } from "express";
import Authcontroller from "../controller/Authcontroller.js";

const router = Router()

router.post("/register", Authcontroller.register)
router.post("/login", Authcontroller.login)
router.get("/getUser", Authcontroller.getAllUser)
router.post("/createRoles", Authcontroller.createRoles)

export default router