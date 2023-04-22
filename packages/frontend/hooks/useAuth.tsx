import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSession } from './useSession';

export const useAuth = () => {
  const router = useRouter();
  const { isLogged, loading } = useSession();

  useEffect(() => {
    if (!isLogged) router.push('/');
  }, [isLogged, router]);

  if (!isLogged || loading) {
    return null;
  }
};
