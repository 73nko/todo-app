import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '../context/useSession';

import {
  Logo,
  TodoWebContainer,
  TodoWebHeader,
} from '../components/components-shared';
import Login from '../components/Login';

const PAGE_TITLE = 'Welcome back!';
const PAGE_SUBTITLE = 'Login to continue';

export function Index({ user }: { user: any }) {
  const router = useRouter();

  const { isLogged, loading } = useSession();
  useEffect(() => {
    if (isLogged) {
      router.push('/todos');
    }
  }, [isLogged, router]);

  if (isLogged || loading) return null;
  return (
    <TodoWebContainer>
      <Logo />
      <TodoWebHeader title={PAGE_TITLE} subtitle={PAGE_SUBTITLE} />
      <Login />
    </TodoWebContainer>
  );
}

export default Index;
