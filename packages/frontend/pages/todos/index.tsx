import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '../../context/useSession';

import {
  TodoWebContainer,
  Logo,
  TodoWebHeader,
} from '../../components/components-shared';
import Todos from '../../components/Todos';

const PAGE_TITLE = 'Todo List';

export function Index() {
  const router = useRouter();
  const { isLogged, loading } = useSession();

  useEffect(() => {
    if (!isLogged) {
      router.push('/');
    }
  }, [isLogged, router]);

  if (!isLogged || loading) {
    return null;
  }
  return (
    <TodoWebContainer>
      <Logo />
      <TodoWebHeader title={PAGE_TITLE} />
      <Todos />
    </TodoWebContainer>
  );
}

export default Index;
