import { ControllerFunction } from 'src/types';

import { Office, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateOffice: ControllerFunction<Office, Office> = async (req, res) => {
  const office = await prisma.office.update({
    where: { id: req.body.id },
    data: req.body,
  });

  if (!office) {
    res.send({ response: "Failed to update office" });
  } else {
    res.send(office);
  }
};

export const updateManyOffices: ControllerFunction<Record<"count", number>, Office[]> = async (
  req,
  res
) => {
  const updateCount = await prisma.office.updateMany({ data: req.body });

  if (!updateCount) {
    res.send({ response: "Failed to update offices" });
  } else {
    res.send(updateCount);
  }
};
