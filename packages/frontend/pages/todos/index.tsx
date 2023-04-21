import TodoWebContainer from '../../components/TodoWebContainer';

const Todos = () => {
  return <div className="page">Todos</div>;
};

export function Index() {
  return (
    <TodoWebContainer>
      <Todos />
    </TodoWebContainer>
  );
}

export default Index;
