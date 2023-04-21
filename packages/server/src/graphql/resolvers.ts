import { DateTimeResolver } from 'graphql-scalars';

import { getUser, createAccount, login } from './Users';
import {
  completeTask,
  createTask,
  deleteTask,
  getTasksByUser,
  getTasksDeletedByUser,
  unCompleteTask,
  updateTask,
} from './Tasks';

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    user: getUser,
    tasksByUser: getTasksByUser,
    tasksDeletedByUser: getTasksDeletedByUser,
  },

  Mutation: {
    createAccount,
    login,
    createTask,
    updateTask,
    completeTask,
    unCompleteTask,
    deleteTask,
  },
};
