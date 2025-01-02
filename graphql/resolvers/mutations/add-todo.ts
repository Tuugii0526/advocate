import { TaskModel } from "@/mongoose/task-model"
type TTaskInput={
    name:string,
    des:string,
    isDone:boolean
}
export const addTodo=async(_:unknown,{input}:{input:TTaskInput
})=>{
try {
    const newTask=await TaskModel.create(input)
    return newTask
} catch (error) {
    
}
}