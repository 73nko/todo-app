import Link from 'next/link';

import { ErrorMessage, Label, InputButton, Form } from '../components-shared/';
import { useSignUp } from './useSignUp';

const SignUp = () => {
  const { handleSubmit, signUpError } = useSignUp();
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <input type="text" name="name" placeholder="Full Name" required />
        </Label>

        <Label>
          <input type="email" name="email" placeholder="Email" required />
          <div className="error">Please enter a valid email</div>
        </Label>

        <Label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            pattern=".{8,}"
            required
          />
          <div className="error">Passwords are 8 characters minimum</div>
        </Label>

        <p>
          Already have an account? <Link href="/">Sign in</Link>
        </p>

        {signUpError && <ErrorMessage>{signUpError}</ErrorMessage>}
        <InputButton type="submit" value="Sign up" />
      </Form>
    </>
  );
};

export default SignUp;
