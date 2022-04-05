import { ControllerFunction } from 'src/types';

import { BookableItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteBookableItem: ControllerFunction<BookableItem, BookableItem> = async (
  req,
  res
) => {
  const id = Number(req.query.id);
  const bookableItem = await prisma.bookableItem.delete({ where: { id } });

  if (!bookableItem) {
    res.send({ response: "Failed to delete item" });
  } else {
    res.send(bookableItem);
  }
};
