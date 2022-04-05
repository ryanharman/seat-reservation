/*
  Warnings:

  - You are about to drop the `OfficeManagers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OfficeManagers" DROP CONSTRAINT "OfficeManagers_officeId_fkey";

-- DropForeignKey
ALTER TABLE "OfficeManagers" DROP CONSTRAINT "OfficeManagers_userId_fkey";

-- DropTable
DROP TABLE "OfficeManagers";

-- CreateTable
CREATE TABLE "OfficeManager" (
    "id" SERIAL NOT NULL,
    "officeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "OfficeManager_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OfficeManager" ADD CONSTRAINT "OfficeManager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeManager" ADD CONSTRAINT "OfficeManager_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
