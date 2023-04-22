import styled from '@emotion/styled';
import { Status, Task } from '@prisma/client';
import { useTodoList } from './useTodoList';
import { Delete } from '../components-shared/';

type TodoListProps = { tasks: Task[] };
type TaskProps = {
  task: Task;
  updateTask: (id: number) => void;
};

const Task = ({ task, updateTask }: TaskProps) => {
  const isCompleted = task.status === Status.DONE;

  return (
    <TaskContainer>
      <input
        type="checkbox"
        onChange={() => updateTask(task.id)}
        checked={isCompleted}
      />
      <span>{task.title}</span>
      <button>
        <Delete />
      </button>
    </TaskContainer>
  );
};

export const TodoList = ({ tasks }: TodoListProps) => {
  const { handleUpdateTask } = useTodoList(tasks);

  return (
    <TodoListContainer>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <Task task={task} updateTask={handleUpdateTask} />
        </li>
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
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  justify-content: flex-start;

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
