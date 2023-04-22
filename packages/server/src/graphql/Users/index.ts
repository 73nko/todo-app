import {
  Context,
  verify,
  createToken,
  CreateAccountInput,
  LoginInput,
} from '@todo-app/utils';
import { Prisma, User } from '@prisma/client';
import {
  checkUserAlreadyExists,
  checkUserEmailExists,
  createUser,
} from './user-utils';

type UserResponse = Prisma.PrismaPromise<User>;
type SignResponse = Promise<{ jwt: string }>;

export const getUser = (
  _parent: unknown,
  _args: unknown,
  context: Context
): UserResponse => {
  if (context.currentUser === null) throw new Error('Unauthenticated!');

  console.log({ currentUser: context.currentUser });
  return context.prisma.user.findUniqueOrThrow({
    where: {
      id: context.currentUser.id,
    },
  });
};

export const createAccount = async (
  _parent: unknown,
  { input }: { input: CreateAccountInput },
  context: Context
): SignResponse => {
  // Check the input is valid
  const { username, password, email } = input;
  if (!username || !password || !email)
    throw new Error('Please enter all fields');

  await checkUserAlreadyExists(context, email);

  const user = await createUser(context, { username, password, email });
  if (!user) throw new Error('Could not create account');

  return { jwt: createToken(user) };
};

export const login = async (
  _parent: unknown,
  { input }: { input: LoginInput },
  context: Context
): SignResponse => {
  // Check input is valid
  const { email, password } = input;
  if (!email || !password) throw new Error('Please enter all fields');

  const user = await checkUserEmailExists(context, email);

  // Check if password is correct
  const isVerified = await verify(password, user.password);
  if (!isVerified) throw new Error('Invalid credentials');

  return { jwt: createToken(user) };
};
