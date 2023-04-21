import TodoWebContainer from '../../components/TodoWebContainer';

const SignUp = () => {
  return <div className="page">SignUp</div>;
};

export function Index() {
  return (
    <TodoWebContainer>
      <SignUp />
    </TodoWebContainer>
  );
}

export default Index;
