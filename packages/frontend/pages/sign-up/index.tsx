import SignUp from '../../components/Sign-up';
import { TodoWebContainer, Logo, TodoWebHeader } from '../../components/shared';

const PAGE_TITLE = 'Welcome!';
const PAGE_SUBTITLE = 'Sign up to start using Simpledo today.';

export function Index() {
  return (
    <TodoWebContainer>
      <Logo />
      <TodoWebHeader title={PAGE_TITLE} subtitle={PAGE_SUBTITLE} />
      <SignUp />
    </TodoWebContainer>
  );
}

export default Index;
