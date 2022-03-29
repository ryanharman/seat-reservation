import { ControllerFunction } from 'src/types';

import { PrismaClient, Reservation } from '@prisma/client';

const prisma = new PrismaClient();

export const updateReservation: ControllerFunction<Reservation, Reservation> = async (req, res) => {
  const reservation = await prisma.reservation.update({
    where: { id: req.body.id },
    data: req.body,
  });

  if (!reservation) {
    res.send({ response: "Failed to update reservation" });
  } else {
    res.send(reservation);
  }
};

export const updateManyReservations: ControllerFunction<
  Record<"count", number>,
  Reservation[]
> = async (req, res) => {
  const updateCount = await prisma.reservation.updateMany({ data: req.body });

  if (!updateCount) {
    res.send({ response: "Failed to update reservations" });
  } else {
    res.send(updateCount);
  }
};
