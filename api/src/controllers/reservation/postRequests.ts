import { ControllerFunction } from 'src/types';

import { PrismaClient, Reservation } from '@prisma/client';

const prisma = new PrismaClient();

export const updateManyReservations: ControllerFunction<
  Record<"count", number>,
  Reservation | Reservation[]
> = async (req, res) => {
  let reservation = [];

  if (Array.isArray(req.body)) {
    for await (const i of req.body) {
      const response = await prisma.reservation.update({
        where: { id: i.id },
        data: i,
      });
      reservation.push(response);
    }
  } else {
    const response = await prisma.reservation.update({
      where: { id: req.body.id },
      data: req.body,
    });
    reservation.push(response);
  }

  if (!reservation) {
    res.send({ response: "Failed to update bookable item" });
  } else {
    res.send({ count: reservation.length });
  }
};
