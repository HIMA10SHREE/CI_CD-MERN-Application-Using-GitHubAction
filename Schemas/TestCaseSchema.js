import mongoose from 'mongoose'
import ProblemSchema from './ProblemSchema.js'

const TestCaseSchema=new mongoose.Schema({

    test_case_id :{
        type:String,
        // required:true,
        // unique:true
    },

    p_id:{
        type:Number,
        required:true,
        // unique:false,
        // ref:ProblemSchema
    },

    input:{
        type:mongoose.Schema.Types.Mixed,
        required:true,
    },

    expected_output:{
        type:mongoose.Schema.Types.Mixed,
        required:true,
     
        
    },

    




},{timestamps:true})

export default mongoose.model('TestCaseTable',TestCaseSchema)