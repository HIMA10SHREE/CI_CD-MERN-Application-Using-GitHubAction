import express from "express"
import { createTestcaseController } from "../controller/TestController.js"


const router=express.Router()


router.post('/testcase',createTestcaseController)

export default router