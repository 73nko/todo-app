import { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import get from 'lodash/get';

import { TASKS_GET_BY_USER, TASK_CREATE } from '../../graphql/Tasks';
import { Status } from '@prisma/client';

export enum Filter {
  ALL = 'All',
  COMPLETED = 'Completed',
  INCOMPLETED = 'Incompleted',
}

export const useTodos = () => {
  const [filter, setFilter] = useState(Filter.ALL);
  const { data, loading } = useQuery(TASKS_GET_BY_USER.gql);
  const allTasks = get(data, 'tasksByUser.tasks', []);

  const tasks = useMemo(
    () =>
      filter === Filter.ALL
        ? allTasks
        : allTasks.filter((task) => {
            if (filter === Filter.COMPLETED) return task.status === Status.DONE;
            if (filter === Filter.INCOMPLETED)
              return task.status === Status.TODO;
          }),
    [allTasks, filter]
  );

  const [addTask] = useMutation(TASK_CREATE.gql, {
    onCompleted: () => {
      console.log('add task');
    },
    onError: (error) => {
      console.log('error', error);
    },
    refetchQueries: [{ query: TASKS_GET_BY_USER.gql }],
  });

  const updateFilter = useCallback((filter: Filter) => {
    setFilter(filter);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const input = target.querySelector('input');
      const title = input?.value;

      if (title) {
        addTask({ variables: { createTaskInput: { title } } });
        input.value = '';
      }
    },
    [addTask]
  );

  return { tasks, loading, handleSubmit, updateFilter, filter };
};
