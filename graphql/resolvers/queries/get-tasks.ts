import { TaskModel } from "@/mongoose/task-model"

export const getTasks=async()=>{
    try {
        const tasks=await TaskModel.find()
        return tasks
    } catch (error) {
        
    }
}