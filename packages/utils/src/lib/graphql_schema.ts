export const typeDefs = `
  scalar DateTime

  enum TaskStatus {
    TODO
    IN_PROGRESS
    DONE
    DELETED
  }

  type User {
    id: Int!
    username: String!
    email: String!
    tasks: [Task!]!
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LoginResponse {
    jwt: String!
  }

  input CreateAccountInput {
    username: String!
    email: String!
    password: String!
  }

  type CreateAccountResponse {
    jwt: String!
  }

  input CreateTaskInput {
    title: String!
  }

  type CreateTaskResponse {
    task: Task!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: String
  }

  input CompleteTaskInput {
    id: Int!
  }

  input UnCompleteTaskInput {
    id: Int!
  }

  type UpdateTaskResponse {
    task: Task!
  }

  input DeleteTaskInput {
    id: Int!
  }

  type DeleteTaskResponse {
    success: Boolean!
  }

  type TasksResponse {
    tasks: [Task]!
  }

  type Query {
    user: User
    tasksByUser: TasksResponse!
    tasksDeletedByUser: TasksResponse!
  }

  type Mutation {
    login(input: LoginInput!): LoginResponse!
    createAccount(input: CreateAccountInput!): CreateAccountResponse!
    createTask(input: CreateTaskInput!): CreateTaskResponse!
    updateTask(input: UpdateTaskInput!): UpdateTaskResponse!
    completeTask(input: CompleteTaskInput!): UpdateTaskResponse!
    unCompleteTask(input: UnCompleteTaskInput!): UpdateTaskResponse!
    deleteTask(input: DeleteTaskInput!): DeleteTaskResponse!
  }
`;
