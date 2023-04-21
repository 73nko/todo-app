import { PrismaClient, User } from '@prisma/client';
import { JwtPayload, verify } from 'jsonwebtoken';
import { jwtConfig } from './crypto';

export async function authenticateUser(
  prisma: PrismaClient,
  request: Request
): Promise<User | null> {
  const header = request.headers.get('authorization');
  if (header !== null) {
    const token = header.split(' ')[1];
    const tokenPayload = verify(token, jwtConfig.jwt.secret) as JwtPayload;
    const userId = tokenPayload['id'];

    if (userId === undefined) return null;
    return await prisma.user.findUnique({ where: { id: userId } });
  }

  return null;
}
