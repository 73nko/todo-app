import { Task, Status } from '@prisma/client';
import { Context } from '@todo-app/utils';
import { validateTask } from './task-utils';

type TaskResponse = Promise<{
  tasks: Task[];
}>;

type CreateTaskInput = {
  title: string;
};

type UpdateTaskInput = {
  id: number;
  title?: string;
  status?: Status;
};

type UpdateStatusTaskInput = {
  id: number;
};

type DeleteTaskResponse = {
  success: boolean;
};

export const getTasksByUser = async (
  _parent: unknown,
  _args: unknown,
  context: Context
): TaskResponse => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  const tasks =
    (await context.prisma.user
      .findUnique({
        where: {
          id: context.currentUser.id,
        },
      })
      .tasks({
        where: {
          OR: [
            {
              status: Status.TODO,
            },
            {
              status: Status.IN_PROGRESS,
            },
            {
              status: Status.DONE,
            },
          ],
        },
      })) || [];

  return { tasks };
};

export const getTasksDeletedByUser = async (
  _parent: unknown,
  _args: unknown,
  context: Context
): TaskResponse => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  const deletedTasks =
    (await context.prisma.user
      .findUnique({
        where: {
          id: context.currentUser.id,
        },
      })
      .tasks({
        where: {
          status: Status.DELETED,
        },
      })) || [];

  return { tasks: deletedTasks };
};

export const createTask = async (
  _parent: unknown,
  { input }: { input: CreateTaskInput },
  context: Context
): Promise<{ task: Task }> => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  // Check input is valid
  const { title } = input;
  if (!title) throw new Error('Task title is required');

  const newTask = await context.prisma.task.create({
    data: {
      title,
      status: Status.TODO,
      user: {
        connect: {
          id: context.currentUser.id,
        },
      },
    },
  });

  return { task: newTask };
};

export const updateTask = async (
  _parent: unknown,
  { input }: { input: UpdateTaskInput },
  context: Context
): Promise<{ task: Task }> => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  // Check input is valid
  const { id, title, status } = input;
  if (!id) throw new Error('Task ID is required');

  const task = await validateTask(context, id);

  const updatedTask = await context.prisma.task.update({
    where: {
      id,
    },
    data: {
      title: title || task.title,
      status: status || task.status,
    },
  });

  return { task: updatedTask };
};

export const completeTask = async (
  _parent: unknown,
  { input }: { input: UpdateStatusTaskInput },
  context: Context
): Promise<{ task: Task }> => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  // Check input is valid
  const { id } = input;
  if (!id) throw new Error('Task ID is required');

  const task = await validateTask(context, id);
  if (task.status === Status.DONE) throw new Error('Task is already done');

  const updatedTask = await context.prisma.task.update({
    where: {
      id,
    },
    data: {
      status: Status.DONE,
    },
  });

  return { task: updatedTask };
};

export const unCompleteTask = async (
  _parent: unknown,
  { input }: { input: UpdateStatusTaskInput },
  context: Context
): Promise<{ task: Task }> => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  // Check input is valid
  const { id } = input;
  if (!id) throw new Error('Task ID is required');

  const task = await validateTask(context, id);
  if (task.status !== Status.DONE) throw new Error('Task is not done');

  const updatedTask = await context.prisma.task.update({
    where: {
      id,
    },
    data: {
      status: Status.IN_PROGRESS,
    },
  });

  return { task: updatedTask };
};

export const deleteTask = async (
  _parent: unknown,
  { input }: { input: UpdateStatusTaskInput },
  context: Context
): Promise<DeleteTaskResponse> => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  // Check input is valid
  const { id } = input;
  if (!id) throw new Error('Task ID is required');

  await validateTask(context, id);

  const task = await context.prisma.task.update({
    where: {
      id,
    },
    data: {
      status: Status.DELETED,
    },
  });

  return { success: Boolean(task) };
};
