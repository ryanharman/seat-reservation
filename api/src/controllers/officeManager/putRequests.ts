import { ControllerFunction } from 'src/types';

import { OfficeManager, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOfficeManager: ControllerFunction<OfficeManager, OfficeManager> = async (
  req,
  res
) => {
  const officeManager = await prisma.officeManager.create({ data: req.body });

  if (!officeManager) {
    res.send({ response: "Failed to create office manager" });
  } else {
    res.send(officeManager);
  }
};

export const createManyOfficeManagers: ControllerFunction<
  Record<"count", number>,
  OfficeManager[]
> = async (req, res) => {
  const officeManagers = await prisma.officeManager.createMany({ data: req.body });

  if (!officeManagers) {
    res.send({ response: "Failed to create office managers" });
  } else {
    res.send(officeManagers);
  }
};
