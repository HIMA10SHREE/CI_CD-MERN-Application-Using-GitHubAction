import TestCaseSchema from "../Schemas/TestCaseSchema.js";

export const createTestcaseController=async(req,res)=>{
    try{
        const {test_case_id,p_id,input,expected_output}=req.body;
        const testcase=new TestCaseSchema({test_case_id,p_id,input,expected_output})
        await testcase.save()
        res.status(200).send({
            success:true,
            message:"created testcases successfully",
            testcase
        });
    }

    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in testcase",
            error
        })
    }

       
   
};



