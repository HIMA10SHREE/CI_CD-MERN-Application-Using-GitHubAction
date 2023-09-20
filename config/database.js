import mongoose from "mongoose";
import colors from "colors";

const connectdb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongoose database ${conn.connection.host}`.bgBlue.white)
    }

    catch(error){
        console.log(`Error in connection ${error}`.bgRed.white)
    }
 }

 export default connectdb;