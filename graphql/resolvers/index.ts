import { addTodo } from "./mutations/add-todo";
import { sayHello } from "./mutations/say-hello";
import { getTasks } from "./queries/get-tasks";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
 getTasks
  },
  Mutation: {
    sayHello,
    addTodo
  },
};
