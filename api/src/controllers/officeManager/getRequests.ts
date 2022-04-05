import { ControllerFunction } from 'src/types';

import { OfficeManager, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOfficeManager: ControllerFunction<OfficeManager> = async (req, res) => {
  const id = Number(req.query.id);
  const officeManager = await prisma.officeManager.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!officeManager) {
    res.send({ response: "No office manager found" });
  } else {
    res.send(officeManager);
  }
};

export const getOfficeManagerByUserid: ControllerFunction<OfficeManager> = async (req, res) => {
  const userId = Number(req.query.userId);
  const officeManager = await prisma.officeManager.findFirst({
    where: { userId },
    include: { user: true },
  });

  if (!officeManager) {
    res.send({ response: "No office manager found" });
  } else {
    res.send(officeManager);
  }
};

export const getOfficeManagers: ControllerFunction<OfficeManager[]> = async (_req, res) => {
  const officeManagers = await prisma.officeManager.findMany({
    include: { user: true },
  });

  if (!officeManagers) {
    res.send({ response: "No office managers found" });
  } else {
    res.send(officeManagers);
  }
};

export const getOfficeManagersByOffice: ControllerFunction<OfficeManager[]> = async (req, res) => {
  const officeId = Number(req.query.officeId);
  const officeManagers = await prisma.officeManager.findMany({
    where: { officeId },
    include: { user: true },
  });

  if (!officeManagers) {
    res.send({ response: "No office managers found for the specified office" });
  } else {
    res.send(officeManagers);
  }
};
