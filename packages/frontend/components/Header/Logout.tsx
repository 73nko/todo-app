import { useRouter } from 'next/router';
import { TOKEN } from '../../graphql/apolloClient';
import { useCallback } from 'react';

export const Logout = () => {
  const router = useRouter();

  const handleLogout = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        localStorage.removeItem(TOKEN);
        router.push('/');
      } catch {
        console.log('error');
      }
    },
    [router]
  );

  return <button onClick={handleLogout}>Logout</button>;
};
