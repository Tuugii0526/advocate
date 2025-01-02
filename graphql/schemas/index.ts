import { gql } from "graphql-tag";
export const typeDefs = gql`
input TaskInput{
name:String!
des:String!
isDone:Boolean

}
type Task{
_id:String
name:String
des:String
isDone:Boolean
}
  type Query {
    helloQuery: Int
    getTasks:[Task]
  }

  type Mutation {
    sayHello(name: String!,age:Int!): String
    addTodo(input:TaskInput):Task
  }
`;
