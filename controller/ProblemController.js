import ProblemSchema from "../Schemas/ProblemSchema.js";

export const createProblemController=async(req,res)=>{
    try{
        const {p_id,p_name,p_description,difficulty_level,time_limit,memory_limit}=req.body;
        const problem=new ProblemSchema({p_id,p_name,p_description,difficulty_level,time_limit,memory_limit})
        await problem.save()
        res.status(200).send({
            success:true,
            message:"created problem successfully",
            problem
        });
    }

    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in problem list",
            error
        })
    }

       
   
};




export const getProblemcontroller=async(req,res)=>{

    try{
        const problem=await ProblemSchema.find({})
        res.status(200).send({
            success:true,
            message:"All problems",
            problem
        })
    }
    catch(error){
        console.log(error),
        res.status(500).send({
            success:false,
            error,
            mesaage:"error in loading problems"
        })
    }

};





export const getSingleProblem=async(req,res)=>{
    try{
        const problem=await ProblemSchema.findOne({p_id:req.params.p_id})
        res.status(200).send({
            success:true,
            message:"Prblem obtained",
            problem
        })
    }
    catch(error){
        console.log(error),
        res.status(500).send({
            success:false,
            error,
            mesaage:"error in loading problem"
        })
    }
}










