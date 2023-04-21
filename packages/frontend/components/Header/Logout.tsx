import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/auth';

export const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};
