import { ControllerFunction } from 'src/types';

import { BookableItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBookableItem: ControllerFunction<BookableItem> = async (req, res) => {
  const id = Number(req.query.id);
  const bookableItem = await prisma.bookableItem.findUnique({ where: { id } });

  if (!bookableItem) {
    res.send({ response: "No bookable item found" });
  } else {
    res.send(bookableItem);
  }
};

export const getBookableItems: ControllerFunction<BookableItem[]> = async (_req, res) => {
  const bookableItems = await prisma.bookableItem.findMany();

  if (!bookableItems) {
    res.send({ response: "No bookable items found" });
  } else {
    res.send(bookableItems);
  }
};

export const getBookableItemsByOffice: ControllerFunction<BookableItem[]> = async (req, res) => {
  const officeId = Number(req.query.officeId);
  const bookableItems = await prisma.bookableItem.findMany({ where: { officeId } });

  if (!bookableItems) {
    res.send({ response: "No bookable items found for the specified office" });
  } else {
    res.send(bookableItems);
  }
};

export const getBookableItemsByType: ControllerFunction<BookableItem[]> = async (req, res) => {
  const type = String(req.query.type);
  const bookableItems = await prisma.bookableItem.findMany({ where: { type } });

  if (!bookableItems) {
    res.send({ response: "No bookable items found for the specified type" });
  } else {
    res.send(bookableItems);
  }
};

export const getBookableItemsByOfficeAndType: ControllerFunction<BookableItem[]> = async (
  req,
  res
) => {
  const type = String(req.query.type);
  const officeId = Number(req.query.officeId);
  const bookableItems = await prisma.bookableItem.findMany({ where: { type, officeId } });

  if (!bookableItems) {
    res.send({ response: "No bookable items found for the specified office and type" });
  } else {
    res.send(bookableItems);
  }
};
