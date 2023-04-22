import useSessionContext from '../../context/SessionContext';
import { useCallback } from 'react';

export const Logout = () => {
  const { logout } = useSessionContext();

  const handleLogout = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      await logout();
    },
    [logout]
  );

  return <button onClick={handleLogout}>Logout</button>;
};
