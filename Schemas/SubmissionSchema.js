import mongoose from 'mongoose'


const SubmissionSchema=new mongoose.Schema({

  language:{
    type:String,
    required:true,
    enum:["cpp","py"],
  },

  filepath:{
    type:String,
    required:true,
  },

  submittedAt:{
    type:Date,
    default:Date.now
  },

  startedAt:{
    type:Date,
  },
  completedAt:{
    type:Date,
  },

  output:{
    type:String,
  },
  status:{
    type:String,
    default:"pending",
    enum:["pending","success","error"]
  }



},{timestamps:true})

export default mongoose.model('SubmissionTable',SubmissionSchema)