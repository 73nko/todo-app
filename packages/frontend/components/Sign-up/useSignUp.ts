import { useMutation } from '@apollo/client';

import { USER_CREATE_ACCOUNT } from '../../graphql/User';
import useSessionContext from '../../context/SessionContext';

type FormValues = {
  name: { value: string };
  email: { value: string };
  password: { value: string };
};

export const useSignUp = () => {
  const { userLogin } = useSessionContext();
  const [signUp] = useMutation(USER_CREATE_ACCOUNT.gql, {
    onCompleted: (data) => {
      if (data?.createAccount?.jwt) {
        userLogin(data.createAccount.jwt, '/todos');
      }
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

  return { handleSubmit };
};
