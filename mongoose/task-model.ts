import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
    name:{
        type:String
    },
    des:{
        type:String
    },
    isDone:{
        type:Boolean
    }
})
export const TaskModel= mongoose.models['Task'] || mongoose.model('Task',taskSchema)