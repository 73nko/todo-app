import { ApolloError, useMutation } from '@apollo/client';
import get from 'lodash/get';

import { USER_LOGIN } from '../../graphql/User';
import useSessionContext from '../../context/SessionContext';
import { useState } from 'react';

type FormValues = {
  email: { value: string };
  password: { value: string };
};

const handleLoginErrors = (
  apolloError: ApolloError,
  setLoginError: (string) => void
) => {
  const error: string = get(
    apolloError,
    'graphQLErrors[0].extensions.originalError.message',
    'Something went wrong trying to login'
  );

  if (error) {
    setLoginError(error);
  }
};

export const useLogin = () => {
  const { userLogin } = useSessionContext();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [login, { loading }] = useMutation(USER_LOGIN.gql, {
    onCompleted: (data) => {
      const {
        login: { jwt },
      } = data;
      if (jwt) {
        userLogin(jwt, '/todos');
      }
    },
    onError: (error) => {
      handleLoginErrors(error, setLoginError);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoginError(null);
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
  return { handleSubmit, loading, loginError };
};
