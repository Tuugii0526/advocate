import { TaskInput } from "@/generated"
import { TaskModel } from "@/mongoose/task-model"
export const addTodo=async(_:unknown,{input}:{input:TaskInput
})=>{
    const newTask=await TaskModel.create(input)
    return newTask
}