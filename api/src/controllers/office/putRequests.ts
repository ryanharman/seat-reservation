import { ControllerFunction } from 'src/types';

import { Office, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOffice: ControllerFunction<Office, Office> = async (req, res) => {
  const office = await prisma.office.create({ data: req.body });

  if (!office) {
    res.send({ response: "Failed to create office" });
  } else {
    res.send(office);
  }
};

export const createManyOffices: ControllerFunction<Record<"count", number>, Office[]> = async (
  req,
  res
) => {
  const offices = await prisma.office.createMany({ data: req.body });

  if (!offices) {
    res.send({ response: "Failed to create offices" });
  } else {
    res.send(offices);
  }
};
