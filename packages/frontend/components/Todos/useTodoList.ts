import { useMutation } from '@apollo/client';
import { Status, Task } from '@prisma/client';

import { TASKS_GET_BY_USER, TASK_UPDATE } from '../../graphql/Tasks';
import { useCallback } from 'react';

export const useTodoList = (tasks: Task[]) => {
  const [updateTask] = useMutation(TASK_UPDATE.gql, {
    onCompleted: () => {
      console.log('update task');
    },
    onError: (error) => {
      console.log('error', error);
    },
    refetchQueries: [{ query: TASKS_GET_BY_USER.gql }],
  });

  const handleUpdateTask = useCallback(
    (id: number) => {
      const task = tasks.find((task: Task) => task.id === id);
      const status = task.status === Status.DONE ? Status.TODO : Status.DONE;
      console.log({ status, id });
      updateTask({ variables: { updateTaskInput: { id, status } } });
    },
    [tasks, updateTask]
  );

  return { handleUpdateTask };
};
