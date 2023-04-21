import { sign } from 'jsonwebtoken';
import { randomBytes, scrypt } from 'crypto';
import { User } from '@prisma/client';

export const jwtConfig = {
  jwt: {
    secret: 'test',
    expiry: 604800, // 1 week
  },
};

export const kdf = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(8).toString('hex');
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ':' + derivedKey.toString('hex'));
    });
  });
};

export const verify = (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(':');
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString('hex'));
    });
  });
};

export const createToken = (user: User): string => {
  return sign({ id: user.id, username: user.username }, jwtConfig.jwt.secret, {
    expiresIn: jwtConfig.jwt.expiry,
  });
};
