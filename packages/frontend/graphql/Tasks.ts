import { gql } from '@apollo/client';

export const TASKS_GET_BY_USER = {
  name: 'tasksByUser',
  gql: gql`
    query tasksByUser {
      tasksByUser {
        tasks {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASKS_GET_DELETED_BY_USER = {
  name: 'tasksDeletedByUser',
  gql: gql`
    query tasksDeletedByUser {
      tasksDeletedByUser {
        tasks {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASK_CREATE = {
  name: 'createTask',
  gql: gql`
    mutation createTask($createTaskInput: CreateTaskInput!) {
      createTask(input: $createTaskInput) {
        task {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASK_UPDATE = {
  name: 'updateTask',
  gql: gql`
    mutation updateTask($updateTaskInput: UpdateTaskInput!) {
      updateTask(input: $updateTaskInput) {
        task {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASK_COMPLETE = {
  name: 'completeTask',
  gql: gql`
    mutation completeTask($completeTaskInput: CompleteTaskInput!) {
      completeTask(input: $completeTaskInput) {
        task {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASK_UNCOMPLETE = {
  name: 'unCompleteTask',
  gql: gql`
    mutation unCompleteTask($unCompleteTaskInput: UnCompleteTaskInput!) {
      unCompleteTask(input: $unCompleteTaskInput) {
        task {
          id
          title
          status
        }
      }
    }
  `,
};

export const TASK_DELETE = {
  name: 'deleteTask',
  gql: gql`
    mutation deleteTask($deleteTaskInput: DeleteTaskInput!) {
      deleteTask(input: $deleteTaskInput) {
        success
      }
    }
  `,
};
