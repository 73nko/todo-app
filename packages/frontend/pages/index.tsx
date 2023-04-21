import { logout } from '../store/auth';

import TodoWebContainer from '../components/TodoWebContainer';
import Login from '../components/Login';
import { wrapper } from '../store/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // Todo: check if user is logged in
      await store.dispatch(logout());
      console.log('State on server', store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export function Index() {
  return (
    <TodoWebContainer>
      <Login />
    </TodoWebContainer>
  );
}

export default Index;
