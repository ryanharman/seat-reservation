import { addDays, endOfDay, endOfToday, startOfDay, startOfToday, subDays } from 'date-fns';
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

export interface SelectedDate {
  dateFrom: Date;
  dateTo: Date;
}

interface GetAvailableBookableItemsBody {
  // selectedDate: SelectedDate;
  dateFrom: string;
  dateTo: string;
  officeId: string | number;
}

export const getAvailableBookableItems: ControllerFunction<
  BookableItem[],
  GetAvailableBookableItemsBody
> = async (req, res) => {
  const officeId = Number(req.body.officeId);
  const dateFrom = req.body.dateFrom as string;
  const dateTo = req.body.dateTo as string;

  const bookableItems = await prisma.bookableItem.findMany({
    where: {
      officeId,
      availableForBooking: true,
      reservations: {
        every: {
          cancelled: false,
          NOT: {
            dateBookedFrom: {
              gte: startOfDay(new Date(dateFrom)).toISOString(),
              lt: endOfDay(new Date(dateTo)).toISOString(),
            },
            // OR: [
            //   {
            //     isAllDay: false,
            //     dateBookedFrom: { gte: new Date(dateFrom).toISOString() },
            //     dateBookedTo: { lt: new Date(dateTo).toISOString() },
            //   },
            //   {
            //     isAllDay: true,
            //     dateBookedFrom: {
            //       gte: startOfDay(new Date(dateFrom)).toISOString(),
            //       lt: endOfDay(new Date(dateTo)).toISOString(),
            //     },
            //   },
            // ],
          },
        },
      },
    },
  });

  if (!bookableItems) {
    res.send({ response: "No bookable items found" });
  } else {
    res.send(bookableItems);
  }
};
