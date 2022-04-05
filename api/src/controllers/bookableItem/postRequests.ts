import bookableItem from 'src/routes/bookableItem';
import { ControllerFunction } from 'src/types';

import { BookableItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateManyBookableItems: ControllerFunction<
  Record<"count", number>,
  BookableItem | BookableItem[]
> = async (req, res) => {
  let bookableItem = [];

  if (Array.isArray(req.body)) {
    for await (const i of req.body) {
      const response = await prisma.bookableItem.update({
        where: { id: i.id },
        data: i,
      });
      bookableItem.push(response);
    }
  } else {
    const response = await prisma.bookableItem.update({
      where: { id: req.body.id },
      data: req.body,
    });
    bookableItem.push(response);
  }

  if (!bookableItem) {
    res.send({ response: "Failed to update bookable item" });
  } else {
    res.send({ count: bookableItem.length });
  }
};
