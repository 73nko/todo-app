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

const ErrorMessage = styled.p`
  text-align: center;
  color: #d8000c;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  padding: 0.8rem 0.5rem;
  width: 100%;
  border: 1px solid;
  border-radius: 0.2rem;
`;

const Login = () => {
  const { handleSubmit, loading, loginError } = useLogin();

  if (loading) return <p>Loading...</p>;

  return (
    <Form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Password" />

      <div>
        <p>
          Don not have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </div>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <input type="submit" value="Login" />
    </Form>
  );
};

export default Login;
