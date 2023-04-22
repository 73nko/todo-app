import styled from '@emotion/styled';
import Link from 'next/link';

import { useLogin } from './useLogin';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const Login = () => {
  const { handleSubmit, loading, error } = useLogin();

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>{error.message}</p>;

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
