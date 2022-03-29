import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "jason.bourne@yeet.com" },
    update: {},
    create: {
      firstName: "Jason",
      lastName: "Bourne",
      email: "jason.bourne@yeet.com",
      password: "000",
      role: "ADMIN",
    },
  });

  const activeTime = JSON.stringify({
    start: addHours(startOfToday(), 6),
    end: subHours(endOfToday(), 5),
  });
  console.log({ activeTime });

  const office = await prisma.office.upsert({
    where: { name: "Office One" },
    update: {},
    create: {
      name: "Office One",
      bookingLength: 120,
      activeTimes: activeTime,
    },
  });

  const bookableItem = await prisma.bookableItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      type: "Seat",
      name: "1",
      availableForBooking: true,
      officeId: 1,
    },
  });
  const bookableItem2 = await prisma.bookableItem.upsert({
    where: { id: 2 },
    update: {},
    create: {
      type: "Seat",
      name: "1",
      availableForBooking: true,
      officeId: 1,
    },
  });
  const bookableItem3 = await prisma.bookableItem.upsert({
    where: { id: 3 },
    update: {},
    create: {
      type: "Seat",
      name: "1",
      availableForBooking: true,
      officeId: 1,
    },
  });

  console.log({ user, office, bookableItem, bookableItem2, bookableItem3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
