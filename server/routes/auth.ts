import express from "express"
import {login} from "../controllers/auth.js"
import { emailCheck, userNameCheck } from "../controllers/keyCheck.js"

const router = express.Router()

router.post("/login", login)
router.post("/userName", userNameCheck)
router.post("/email", emailCheck)
export default router