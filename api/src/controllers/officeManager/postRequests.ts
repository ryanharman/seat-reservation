import { ControllerFunction } from 'src/types';

import { OfficeManager, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateOfficeManager: ControllerFunction<OfficeManager, OfficeManager> = async (
  req,
  res
) => {
  const officeManager = await prisma.officeManager.update({
    where: { id: req.body.id },
    data: req.body,
  });

  if (!officeManager) {
    res.send({ response: "Failed to update office manager" });
  } else {
    res.send(officeManager);
  }
};

export const updateManyOfficeManagers: ControllerFunction<
  Record<"count", number>,
  OfficeManager[]
> = async (req, res) => {
  const updateCount = await prisma.officeManager.updateMany({ data: req.body });

  if (!updateCount) {
    res.send({ response: "Failed to update office managers" });
  } else {
    res.send(updateCount);
  }
};
