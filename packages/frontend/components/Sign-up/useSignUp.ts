import { ApolloError, useMutation } from '@apollo/client';
import get from 'lodash/get';

import { USER_CREATE_ACCOUNT } from '../../graphql/User';
import useSessionContext from '../../context/SessionContext';
import { useState } from 'react';

type FormValues = {
  name: { value: string };
  email: { value: string };
  password: { value: string };
};

const handleSignUpErrors = (
  apolloError: ApolloError,
  setSignUpError: (string) => void
) => {
  const error: string = get(
    apolloError,
    'graphQLErrors[0].extensions.originalError.message',
    'Something went wrong trying to sign up'
  );

  if (error) {
    setSignUpError(error);
  }
};

export const useSignUp = () => {
  const { userLogin } = useSessionContext();
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signUp] = useMutation(USER_CREATE_ACCOUNT.gql, {
    onCompleted: (data) => {
      if (data?.createAccount?.jwt) {
        userLogin(data.createAccount.jwt, '/todos');
      }
    },
    onError: (error) => {
      handleSignUpErrors(error, setSignUpError);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = event.target as typeof event.target &
      FormValues;

    signUp({
      variables: {
        createAccountInput: {
          username: name.value,
          email: email.value,
          password: password.value,
        },
      },
    });
  };

  return { handleSubmit, signUpError };
};
