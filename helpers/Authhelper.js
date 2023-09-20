import bcrypt from "bcrypt";

export const hashpassword=async(password)=>{
    try{
        const saltround=10;
        const hashedpass=await bcrypt.hash(password,saltround);
        return hashedpass;
    }
    catch(error){
        console.log(error);
    }
};


export const comparepassowrd=async(password,hashedpass)=>{
    return bcrypt.compare(password,hashedpass);
};
