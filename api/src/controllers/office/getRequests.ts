import { ControllerFunction } from 'src/types';

import { Office, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOffice: ControllerFunction<Office> = async (req, res) => {
  const id = Number(req.query.id);
  const office = await prisma.office.findUnique({ where: { id } });

  if (!office) {
    res.send({ response: "No offices found" });
  } else {
    res.send(office);
  }
};

export const getOffices: ControllerFunction<Office[]> = async (_req, res) => {
  const offices = await prisma.office.findMany();

  if (!offices) {
    res.send({ response: "No offices found" });
  } else {
    res.send(offices);
  }
};
