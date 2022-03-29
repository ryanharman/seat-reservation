import { ControllerFunction } from 'src/types';

import { PrismaClient, Reservation } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteReservation: ControllerFunction<Reservation, Reservation> = async (req, res) => {
  const id = Number(req.query.id);
  const reservation = await prisma.reservation.delete({ where: { id } });

  if (!reservation) {
    res.send({ response: "Failed to delete reservation" });
  } else {
    res.send(reservation);
  }
};

// export const deleteManyReservations: ControllerFunction<
//   Record<"count", number>,
//   Reservation[]
// > = async (req, res) => {
// const createReservations = await prisma.reservation.deleteMany({ where: req.body });

//   if (!createReservations) {
//     res.send({ response: "Failed to create reservations" });
//   } else {
//     res.send(createReservations);
//   }
// };
