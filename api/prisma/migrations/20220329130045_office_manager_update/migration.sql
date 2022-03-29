-- CreateTable
CREATE TABLE "OfficeManagers" (
    "id" SERIAL NOT NULL,
    "officeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "OfficeManagers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OfficeManagers" ADD CONSTRAINT "OfficeManagers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeManagers" ADD CONSTRAINT "OfficeManagers_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
