import styled from '@emotion/styled';
import { Status, Task } from '@prisma/client';
import { useTodoList } from './useTodoList';
import { Delete } from '../components-shared/';

type TodoListProps = { tasks: Task[] };
type TaskProps = {
  task: Task;
  updateTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const Task = ({ task, updateTask, deleteTask }: TaskProps) => {
  const isCompleted = task.status === Status.DONE;

  return (
    <TaskContainer>
      <input
        type="checkbox"
        onChange={() => updateTask(task.id)}
        checked={isCompleted}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>
        <Delete />
      </button>
    </TaskContainer>
  );
};

export const TodoList = ({ tasks }: TodoListProps) => {
  const { handleUpdateTask, deleteTask } = useTodoList(tasks);

  return (
    <TodoListContainer>
      {tasks.map((task: Task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={handleUpdateTask}
          deleteTask={deleteTask}
        />
      ))}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--main-color) var(--secondary-text-color);
`;

const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  justify-content: flex-start;
  transition: ease 0.5s all;
  :hover {
    background: rgba(161, 164, 173, 0.3);
  }

  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    accent-color: var(--main-color);
    outline: none;
    content: none;
    border: 1px solid var(--secondary-text-color);
    border-radius: 0.25rem;
  }

  button {
    margin-left: auto;
    border: none;
    outline: none;
    background: none;
    color: inherit;
    svg path {
      transition: ease 0.5s all;
    }
    :hover {
      cursor: pointer;
      font-weight: 800;
      svg path {
        fill: var(--error-color);
      }
    }
  }
`;
