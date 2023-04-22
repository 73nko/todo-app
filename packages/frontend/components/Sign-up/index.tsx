import styled from '@emotion/styled';
import Link from 'next/link';

import { useSignUp } from './useSignUp';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const SignUp = () => {
  const { handleSubmit } = useSignUp();
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
