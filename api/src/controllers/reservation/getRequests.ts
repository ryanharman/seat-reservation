import { ControllerFunction } from 'src/types';

import { PrismaClient, Reservation } from '@prisma/client';

const prisma = new PrismaClient();

export const getReservation: ControllerFunction<Reservation> = async (req, res) => {
  const id = Number(req.query.id);
  const reservation = await prisma.reservation.findUnique({ where: { id } });

  if (!reservation) {
    res.send({ response: "No reservation found" });
  } else {
    res.send(reservation);
  }
};

export const getReservations: ControllerFunction<Reservation[]> = async (_req, res) => {
  const reservations = await prisma.reservation.findMany();

  if (!reservations) {
    res.send({ response: "No reservations found" });
  } else {
    res.send(reservations);
  }
};

export const getReservationsByUser: ControllerFunction<Reservation[]> = async (req, res) => {
  const userId = Number(req.query.userId);
  const reservations = await prisma.reservation.findMany({
    where: { userId },
  });

  if (!reservations) {
    res.send({ response: "No reservations found for the specified user" });
  } else {
    res.send(reservations);
  }
};

export const getReservationsByItem: ControllerFunction<Reservation[]> = async (req, res) => {
  const bookedItemId = Number(req.query.bookedItemId);
  const reservations = await prisma.reservation.findMany({
    where: { bookedItemId },
  });

  if (!reservations) {
    res.send({ response: "No reservations found for the specified item" });
  } else {
    res.send(reservations);
  }
};

export const getReservationsByOffice: ControllerFunction<Reservation[]> = async (req, res) => {
  const officeId = Number(req.query.officeId);
  const reservations = await prisma.reservation.findMany({
    where: { bookedItem: { officeId } },
  });

  if (!reservations) {
    res.send({ response: "No reservations found for the specified office" });
  } else {
    res.send(reservations);
  }
};
