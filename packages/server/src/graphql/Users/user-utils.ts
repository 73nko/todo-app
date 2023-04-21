import { User } from '@prisma/client';
import { Context, kdf } from '@todo-app/utils';

export const createUser = async (
  context: Context,
  {
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }
): Promise<User | null> => {
  const salt = await kdf(password.trim());
  const user = await context.prisma.user.create({
    data: {
      username: username.trim(),
      email: email.trim().toLocaleLowerCase(),
      password: salt,
      tasks: undefined,
    },
  });

  return user;
};

export const checkUserAlreadyExists = async (
  context: Context,
  email: string
): Promise<User> => {
  const user = await context.prisma.user.findUnique({
    where: {
      email: email.trim().toLowerCase(),
    },
  });

  if (user) throw new Error('Email already exists');

  return user;
};

export const checkUserEmailExists = async (
  context: Context,
  email: string
): Promise<User> => {
  const user = await context.prisma.user.findUnique({
    where: {
      email: email.trim().toLowerCase(),
    },
  });

  if (!user) throw new Error('Email does not exist');
  return user;
};
