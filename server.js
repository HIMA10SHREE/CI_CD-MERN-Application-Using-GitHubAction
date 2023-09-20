import dotenv from "dotenv";
import express from "express";
const App=express()
import colors from "colors";
import morgan from "morgan";
import connectdb from "./config/database.js";
import authRoutes from "./routes/Authroutes.js";
import problemroutes from './routes/ProblemRoutes.js'
import TestCaseRoutes from "./routes/TestCaseRoutes.js"
import SubmissionSchema from "./Schemas/SubmissionSchema.js";
import generateFile from "./generateFile.js";
import executeCpp from "./executeCpp.js";
import executePy from "./executePy.js";

import cors from 'cors'


dotenv.config();
connectdb();

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({extended:true}))
// App.use(morgan('dev'))
App.use("/api/v1/auth", authRoutes);

App.use('/api/v1/Problem',problemroutes)
App.use('/api/v1/TestCase',TestCaseRoutes)
// App.get("/",(req,res)=>{
//     res.send({
//         message:"welcome to online judge"
//     })
// })

App.get("/status",async(req,res)=>{
    const jobId=req.query.id;
    console.log("status requested",jobId)
    if(jobId==undefined){
        return res.status(400).json({success:false,error:"missing id"})

    }
    try{
    const job= await  SubmissionSchema.findById(jobId)
    if(job==undefined){
        return res.status(404).json({success:false,error:"invalid"})
    }
    return res.status(200).json({success:"true",job})
  }
  catch(err){
    return res.status(400).json({success:false,error:JSON.stringify(err)})
  }
}
)



App.post("/run",async(req,res)=>{
   const{ language="cpp",code }=req.body;
   console.log(language)
   if(code==undefined){
    return res.status(400).json({
        success:false,
        error:'empty code',
    })
}
let submission;

try{
const filepath=await generateFile(language,code);
submission=await new SubmissionSchema({language,filepath}).save()
console.log(submission)
const jobId=submission["_id"];
console.log(jobId)
res.status(201).json({
    success:true,
    jobId
})

let output;
submission["statedAt"]=new Date();
if(language=='cpp'){
 output=await executeCpp(filepath)
}
else{
    if(language=="py"){
         output=await executePy(filepath)
    }
    else{
         output=await executeJava(filepath)
    }
}

submission["comletedAt"]=new Date();
submission["status"]="success";
submission["output"]=output;
await submission.save()
console.log(submission)
// return res.json({filepath,output});
}catch(err){
    submission["completedAt"]=new Date();
    submission["status"]="error";
    submission["output"]=JSON.stringify(err);
    await submission.save()
    console.log(submission)
    // res.status(500).json({err})
}


});

const PORT=process.env.PORT || 8000;
App.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`.bgMagenta)
})