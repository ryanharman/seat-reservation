import { ControllerFunction } from 'src/types';

import { Office, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateManyOffices: ControllerFunction<
  Record<"count", number>,
  Office | Office[]
> = async (req, res) => {
  let office = [];

  if (Array.isArray(req.body)) {
    for await (const i of req.body) {
      const response = await prisma.office.update({
        where: { id: i.id },
        data: i,
      });
      office.push(response);
    }
  } else {
    const response = await prisma.office.update({
      where: { id: req.body.id },
      data: req.body,
    });
    office.push(response);
  }

  if (!office) {
    res.send({ response: "Failed to update bookable item" });
  } else {
    res.send({ count: office.length });
  }
};
