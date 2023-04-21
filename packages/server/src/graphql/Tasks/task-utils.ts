import { Task } from '@prisma/client';
import { Context } from '@todo-app/utils';

export const validateTask = async (
  context: Context,
  id: number
): Promise<Task> => {
  const task = await context.prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!task) throw new Error('Task not found');
  if (task.userId !== context.currentUser.id) throw new Error('Unauthorized');

  return task;
};
