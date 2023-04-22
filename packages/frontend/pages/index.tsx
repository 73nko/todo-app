import {
  Logo,
  TodoWebContainer,
  TodoWebHeader,
} from '../components/components-shared';
import Login from '../components/Login';

import { USER_GET } from '../graphql/User';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

const PAGE_TITLE = 'Welcome back!';
const PAGE_SUBTITLE = 'Login to continue';

export function Index({ user }: { user: any }) {
  const router = useRouter();
  const { loading, data, error } = useQuery(USER_GET.gql);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data?.user) {
    router.push('/todos');
  }

  return (
    <TodoWebContainer>
      <Logo />
      <TodoWebHeader title={PAGE_TITLE} subtitle={PAGE_SUBTITLE} />
      <Login />
    </TodoWebContainer>
  );
}

export default Index;
