import { ControllerFunction } from 'src/types';

import { OfficeManager, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateManyOfficeManagers: ControllerFunction<
  Record<"count", number>,
  OfficeManager | OfficeManager[]
> = async (req, res) => {
  let officeManager = [];

  if (Array.isArray(req.body)) {
    for await (const i of req.body) {
      const response = await prisma.officeManager.update({
        where: { id: i.id },
        data: i,
      });
      officeManager.push(response);
    }
  } else {
    const response = await prisma.officeManager.update({
      where: { id: req.body.id },
      data: req.body,
    });
    officeManager.push(response);
  }

  if (!officeManager) {
    res.send({ response: "Failed to update bookable item" });
  } else {
    res.send({ count: officeManager.length });
  }
};
