import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({ data: users });
  await prisma.building.createMany({ data: buildings });
  await prisma.office.createMany({ data: offices });
  await prisma.bookableItemTypes.createMany({ data: bookableItemTypes });
  await prisma.bookableItem.createMany({ data: bookableItems });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const users = [
  {
    email: "ryan.harman63@gmail.com",
    firstName: "Ryan",
    lastName: "Harman",
    password: "test123",
  },
  {
    email: "jesus@gmail.com",
    firstName: "Jesus",
    lastName: "Christ",
    password: "test123",
  },
];

const buildings = [
  {
    name: "Home",
  },
  {
    name: "Michael Jackson's Childrens Hospital",
  },
  {
    name: "Hogwarts",
  },
];

const offices = [
  {
    name: "Ryan's Bedroom",
    buildingId: 1,
  },
  {
    name: "The Kitchen",
    buildingId: 1,
  },
  {
    name: "The Living Room",
    buildingId: 1,
  },
];

const bookableItemTypes = [
  {
    name: "Seat",
  },
  {
    name: "Meeting Room",
  },
  {
    name: "Workspace",
  },
];

const bookableItems = [
  {
    officeId: 1,
    typeId: 1,
    name: "Seat 1",
  },
  {
    officeId: 1,
    typeId: 1,
    name: "Seat 2",
  },
  {
    officeId: 1,
    typeId: 1,
    name: "Seat 3",
  },
  {
    officeId: 1,
    typeId: 1,
    name: "Seat 4",
  },
  {
    officeId: 1,
    typeId: 1,
    name: "Seat 5",
  },
  {
    officeId: 1,
    typeId: 2,
    name: "Meeting Room",
  },
  {
    officeId: 1,
    typeId: 3,
    name: "Workspace",
  },
];
