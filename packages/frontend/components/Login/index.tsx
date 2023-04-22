import styled from '@emotion/styled';
import Link from 'next/link';

import { useLogin } from './useLogin';
import { ErrorMessage } from '../components-shared/ErrorMessage';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const Login = () => {
  const { handleSubmit, loginError } = useLogin();

  return (
    <Form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />

      <input type="password" name="password" placeholder="Password" required />

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
