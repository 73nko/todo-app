import { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { User } from '@prisma/client';

import { TOKEN } from '../graphql/apolloClient';
import { USER_GET } from '../graphql/User';

export type ClientUser = Pick<User, 'id' | 'email' | 'username'>;

export const useSession = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<ClientUser | null>(null);

  const [getUser, { loading }] = useLazyQuery(USER_GET.gql, {
    onCompleted: (data) => {
      if (data.user && !user) {
        setUser(data.user);
      }
    },
    onError: (error) => {
      if (router.pathname !== '/') router.push('/');
      if (user) setUser(null);
      if (isLogged) setIsLogged(false);
    },
  });

  const logout = useCallback(async () => {
    await localStorage.removeItem(TOKEN);
    setIsLogged(false);
    setUser(null);
    router.push('/');
  }, [router]);

  const userLogin = useCallback(
    async (jwt: string, redirectTo = '/') => {
      await localStorage.setItem(TOKEN, jwt);
      await getUser();
      setIsLogged(true);
      router.push(redirectTo);
    },
    [getUser, router]
  );

  useEffect(() => {
    const tryToQueryUser = async () => {
      const token = await localStorage.getItem(TOKEN);
      if (token && !isLogged) await userLogin(token, '/todos');
    };

    tryToQueryUser();
  }, [isLogged, router, userLogin]);

  return { isLogged, user, userLogin, logout, loading };
};
