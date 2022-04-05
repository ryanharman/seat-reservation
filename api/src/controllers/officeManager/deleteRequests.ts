import { ControllerFunction } from 'src/types';

import { OfficeManager, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteOfficeManager: ControllerFunction<OfficeManager, OfficeManager> = async (
  req,
  res
) => {
  const id = Number(req.query.id);
  const officeManager = await prisma.officeManager.delete({ where: { id } });

  if (!officeManager) {
    res.send({ response: "Failed to delete office manager" });
  } else {
    res.send(officeManager);
  }
};
