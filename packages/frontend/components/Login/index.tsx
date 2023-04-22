import Link from 'next/link';

import { useLogin } from './useLogin';
import { ErrorMessage, Form, InputButton, Label } from '../components-shared';

const Login = () => {
  const { handleSubmit, loginError } = useLogin();

  return (
    <Form onSubmit={handleSubmit}>
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
      <div>
        <p>
          Don not have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </div>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <InputButton type="submit" value="Login" />
    </Form>
  );
};

export default Login;
