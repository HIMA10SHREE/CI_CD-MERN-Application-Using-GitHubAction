import { comparepassowrd, hashpassword } from "../helpers/Authhelper.js";
import userModel from "../Schemas/UserdbSchema.js";
import JWT from "jsonwebtoken";

export const registrationController =async(req,res) =>{
 try{
    const {name,email,password,phone,address}=req.body
    if(!name){
        return res.send({message: "Name required"});
    }
    if(!password){
        return res.send({message: "Password required"});
    }

    if(!email){
        return res.send({message: "Email required"});
    }

    if(!phone){
        return res.send({message: "Phone number required"});
    }

    if(!address){
        return res.send({message: "Address is required"});
    }

    const existinguser=await userModel.findOne({email})
    if(existinguser){
            return res.status(200).send({
                success:false,
                message:"Already registered, Login please!"
            })
    
        }

    const hashedPass=await hashpassword(password)    
    const user= await new userModel({name,email,phone,address,password:hashedPass}).save()
    res.status(201).send({
        success:true,
        message:"Registered successfully",
        user,
    })

}

 catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:"registration error",
        error
    })
    
 }
}

//login

export const loginController=async(req,res)=>{
    try{
        const {email, password}=req.body
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password",
              }  ) 
        }

        //userchecking
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Invalid email "
            })
        }

        const match=await comparepassowrd(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password "
            })
        }

        const token= await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",})
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                address:user.address,
                phone:user.phone,
                role:user.role,
        },
        token,
        });

        return res.status(200).send({
            success:true,
            message:"Logged in successfully "
        })
        }

    
    catch(error){
        console.log(error)
        res.status(500).send({
        success:false,
        message:"login error",
        error
    })
    }
}
