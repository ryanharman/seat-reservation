import { ControllerFunction } from 'src/types';

import { Office, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteOffice: ControllerFunction<Office, Office> = async (req, res) => {
  const id = Number(req.query.id);
  const office = await prisma.office.delete({ where: { id } });

  if (!office) {
    res.send({ response: "Failed to delete office" });
  } else {
    res.send(office);
  }
};
