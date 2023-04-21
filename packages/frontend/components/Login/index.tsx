import styled from '@emotion/styled';
import Link from 'next/link';
import { USER_LOGIN } from '../../graphql/User';
import { useMutation } from '@apollo/client';
import { TOKEN } from '../../graphql/apolloClient';
import { useRouter } from 'next/router';

type FormValues = {
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

const Login = () => {
  const router = useRouter();
  const [login] = useMutation(USER_LOGIN.gql);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.target as typeof event.target &
      FormValues;

    const {
      data: {
        login: { jwt },
      },
    } = await login({
      variables: {
        loginInput: {
          email: email.value,
          password: password.value,
        },
      },
    });

    if (jwt) {
      localStorage.setItem(TOKEN, jwt);
      router.push('/todos');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Password" />

      <div>
        <p>
          Don not have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </div>

      <input type="submit" value="Login" />
    </Form>
  );
};

export default Login;
