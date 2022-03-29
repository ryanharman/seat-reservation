import { ControllerFunction } from 'src/types';

import { PrismaClient, Reservation } from '@prisma/client';

const prisma = new PrismaClient();

export const createReservation: ControllerFunction<Reservation, Reservation> = async (req, res) => {
  const reservation = await prisma.reservation.create({ data: req.body });

  if (!reservation) {
    res.send({ response: "Failed to create reservation" });
  } else {
    res.send(reservation);
  }
};

export const createManyReservations: ControllerFunction<
  Record<"count", number>,
  Reservation[]
> = async (req, res) => {
  const createReservations = await prisma.reservation.createMany({ data: req.body });

  if (!createReservations) {
    res.send({ response: "Failed to create reservations" });
  } else {
    res.send(createReservations);
  }
};
