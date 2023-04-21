import { useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import Link from 'next/link';
import { USER_CREATE_ACCOUNT } from '../../graphql/User';
import { useEffect } from 'react';

type FormValues = {
  name: { value: string };
  email: { value: string };
  password: { value: string };
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const SignUp = () => {
  const [signUp, { data }] = useMutation(USER_CREATE_ACCOUNT.gql);

  useEffect(() => {
    if (data?.createAccount?.jwt) {
      localStorage.setItem('todo-app-token', data.createAccount.jwt);
    }
  }, [data]);

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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />

        <input type="password" name="password" placeholder="Password" />

        <div>
          <p>
            Already have an account? <Link href="/">Sign in</Link>
          </p>
        </div>

        <input type="submit" value="Sign up" />
      </Form>
    </>
  );
};

export default SignUp;
