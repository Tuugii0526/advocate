import { addTodo } from "@/graphql/resolvers/mutations/add-todo";
const task={
    name:'task',
    des:'des',
    isDone:false
}
jest.mock("../../mongoose/task-model",()=>({
    TaskModel:{
        create:jest.fn().mockResolvedValue({
            name:'task',
            des:'des',
            isDone:false
        })
    }

}))
describe("Add task",()=>{
    it('SHould add a task',async()=>{
        const newTask=await addTodo({},{input:task})
        expect(newTask).toEqual(task)
    })
})