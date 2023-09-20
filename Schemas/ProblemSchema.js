import mongoose from 'mongoose'


const ProblemSchema=new mongoose.Schema({

    p_id:{
        type:Number,
        // required:true,
        // unique:true,
        
    },

    p_name:{
        type:String,
        // required:true,
        // unique:true
    },

    p_description:{
        type:String,
        // required:true,
    },

    difficulty_level:{
        type:String,
        // required:true,
        unique:false,
        
    },

    time_limit:{
        type:String,
        // required:true,
        unique:false,
        
    },


    memory_limit:{
        type:String,
        // required:true,
        unique:false,
    }







},{timestamps:true})

export default mongoose.model('ProblemTable',ProblemSchema)