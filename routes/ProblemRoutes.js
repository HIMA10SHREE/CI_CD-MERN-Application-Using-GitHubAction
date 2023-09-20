import express from "express"
import { createProblemController, getProblemcontroller ,getSingleProblem} from "../controller/ProblemController.js"


const router=express.Router()


router.post('/problem',createProblemController)
router.get('/get-problem',getProblemcontroller)
router.get('/get-problem/:p_id',getSingleProblem)

export default router