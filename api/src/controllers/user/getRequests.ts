import { ControllerFunction } from 'src/types';

import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUser: ControllerFunction<User> = async (req, res) => {
  const id = Number(req.query.id);
  const user = await prisma.user.findUnique({ where: { id }, include: { reservations: true } });

  if (!user) {
    res.send({ response: "No user found" });
  } else {
    res.send(user);
  }
};
