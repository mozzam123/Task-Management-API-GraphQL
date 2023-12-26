export const typeDefs = `#graqhql
type Task{
    _id: ID!,
    title: String,
    description: String,
    priority: String,
}
type Query {
    tasks: [Task!]
    task(id:ID!): Task
}
type Mutation {
    createTask(title: String!, description: String!, priority: String!): Task,
    updateTask(id:String!, title: String!, description: String!, priority: String!): Task
}
`;
