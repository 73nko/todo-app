import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '../hooks/useSession';

import { PageLayout } from '../components/components-shared';
import Login from '../components/Login';

const PAGE_TITLE = 'Welcome back!';
const PAGE_SUBTITLE = 'Login to continue';

export function Index() {
  const { isLogged, loading } = useLogin();

  if (isLogged || loading) return null;

  return (
    <PageLayout title={PAGE_TITLE} subTitle={PAGE_SUBTITLE}>
      <Login />
    </PageLayout>
  );
}

export default Index;

const useLogin = () => {
  const router = useRouter();

  const { isLogged, loading } = useSession();
  useEffect(() => {
    if (isLogged) {
      router.push('/todos');
    }
  }, [isLogged, router]);

  return { isLogged, loading };
};
