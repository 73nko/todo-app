import { useMutation } from '@apollo/client';

import { USER_LOGIN } from '../../graphql/User';
import useSessionContext from '../../context/SessionContext';

type FormValues = {
  email: { value: string };
  password: { value: string };
};

export const useLogin = () => {
  const { userLogin } = useSessionContext();
  const [login, { loading, error }] = useMutation(USER_LOGIN.gql, {
    onCompleted: (data) => {
      const {
        login: { jwt },
      } = data;
      if (jwt) {
        userLogin(jwt, '/todos');
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.target as typeof event.target &
      FormValues;

    login({
      variables: {
        loginInput: {
          email: email.value,
          password: password.value,
        },
      },
    });
  };
  return { handleSubmit, loading, error };
};
