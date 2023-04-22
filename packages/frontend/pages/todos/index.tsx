import Todos from '../../components/Todos';
import {
  TodoWebContainer,
  Logo,
  TodoWebHeader,
} from '../../components/components-shared';

const PAGE_TITLE = 'Todo List';

export function Index() {
  return (
    <TodoWebContainer>
      <Logo />
      <TodoWebHeader title={PAGE_TITLE} />
      <Todos />
    </TodoWebContainer>
  );
}

export default Index;
