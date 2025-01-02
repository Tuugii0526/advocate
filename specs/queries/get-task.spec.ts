import { getTasks } from "@/graphql/resolvers/queries/get-tasks"
import { TaskModel } from "@/mongoose/task-model"
jest.mock("../../mongoose/task-model",()=>({
TaskModel:{
    find:jest.fn().mockResolvedValue([
   {
    _id:1,
    name:'Name',
    des:'Des',
    isDone:false
   }
    ])
}
}))

describe("Get task",()=>{
    it("Should get tasks",async()=>{
       const tasks=await getTasks()
       expect(tasks).toEqual([
        {
         _id:1,
         name:'Name',
         des:'Des',
         isDone:false
        }
         ])
    })
})