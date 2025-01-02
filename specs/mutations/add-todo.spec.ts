import { addTodo } from "@/graphql/resolvers/mutations/add-todo";
import { TaskModel } from "@/mongoose/task-model";
// /Users/24LP3558/pinecone-advocate-graphql-challenge/mongoose/task-model.ts
jest.mock("../../mongoose/task-mode.ts",()=>({
    TaskModel:{
        create:jest.fn()
    }

}))