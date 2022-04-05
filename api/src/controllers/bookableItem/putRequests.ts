import { ControllerFunction } from 'src/types';

import { BookableItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createBookableItem: ControllerFunction<BookableItem, BookableItem> = async (
  req,
  res
) => {
  const bookableItem = await prisma.bookableItem.create({ data: req.body });

  if (!bookableItem) {
    res.send({ response: "Failed to create bookable item" });
  } else {
    res.send(bookableItem);
  }
};

export const createManyBookableItems: ControllerFunction<
  Record<"count", number>,
  BookableItem[]
> = async (req, res) => {
  const createBookableItems = await prisma.bookableItem.createMany({ data: req.body });

  if (!createBookableItems) {
    res.send({ response: "Failed to create bookable items" });
  } else {
    res.send(createBookableItems);
  }
};
