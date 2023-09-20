import express from "express";
import {registrationController,loginController} from "../controller/AuthController.js";
import { requireSignIn ,isAdmin} from "../middlewares/Middleware.js";

const route=express.Router();

route.post("/register",registrationController)
route.post("/login",loginController)

//protected routes

// route.get('/user-auth',requireSignIn,(req,res)=>{
//     res.status(200).send({ok:true});
// });

// route.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
//     res.status(200).send({ok:true});
// });

export default route