import { Router } from "express";
import Authcontroller from "../controller/Authcontroller.js";
import AuthMidlewere from "../middlewere/AuthMidlewere.js";

const router = Router()

router.post("/register", Authcontroller.register)
router.post("/login", Authcontroller.login)
router.get("/getUser", AuthMidlewere, Authcontroller.getAllUser)
router.get("/createRoles", Authcontroller.createRoles)

export default router