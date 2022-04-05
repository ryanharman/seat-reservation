import { ControllerFunction } from 'src/types';

import { BookableItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateBookableItem: ControllerFunction<BookableItem, BookableItem> = async (
  req,
  res
) => {
  const bookableItem = await prisma.bookableItem.update({
    where: { id: req.body.id },
    data: req.body,
  });

  if (!bookableItem) {
    res.send({ response: "Failed to update bookable item" });
  } else {
    res.send(bookableItem);
  }
};

// bloody nightmare this one. Doesn't work properly
export const updateManyBookableItems: ControllerFunction<
  Record<"count", number>,
  BookableItem[]
> = async (req, res) => {
  console.log({ req });
  const idsForUpdate = req.body.map((i) => i.id);
  const updateCount = await prisma.bookableItem.updateMany({
    data: req.body,
    where: { id: { in: idsForUpdate } },
  });

  if (!updateCount) {
    res.send({ response: "Failed to update bookable items" });
  } else {
    res.send(updateCount);
  }
};
