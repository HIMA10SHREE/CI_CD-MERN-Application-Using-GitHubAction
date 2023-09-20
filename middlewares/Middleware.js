import JWT from "jsonwebtoken";
import userModel from "../Schemas/UserdbSchema.js"

//token based web protection

export const requireSignIn=async(req,res,next)=>{
    try{
        const decode=JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user=decode;
        next();

    }

    catch(error){
        console.log(error)
    }
};


//admin
export const isAdmin=async (req,es,next)=>{
    try{
       const user = await userModel.findById(req.user._id)
       if(user.role!==1) {
        return res.status(401).send({
            success:false,
            message:"Unauthorised admin",

        });
       }

       else{
        next();
       }
    }

    catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"Error in middleware"
        })
    }
}