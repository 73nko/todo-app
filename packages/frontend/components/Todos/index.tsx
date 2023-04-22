import isEmpty from 'lodash/isEmpty';

import { Label, Form } from '../components-shared';
import { Filters } from './Filters';
import { TodoList } from './TodoList';
import { useTodos } from './useTodos';

const Todos = () => {
  const { tasks, loading, handleSubmit, updateFilter, filter } = useTodos();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <input type="text" placeholder={'Add a new todo'} required />
        </Label>
      </Form>
      {loading && <p>Loading...</p>}
      {!tasks || isEmpty(tasks) ? <p>No tasks</p> : false}
      {tasks && !isEmpty(tasks) && <TodoList tasks={tasks} />}

      <Filters updateFilter={updateFilter} filter={filter} />
    </>
  );
};

export default Todos;
