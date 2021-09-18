/*
  Warnings:

  - You are about to drop the column `name` on the `BuildingManager` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `OfficeManager` table. All the data in the column will be lost.
  - Added the required column `userId` to the `BuildingManager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `OfficeManager` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BuildingManager" DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OfficeManager" DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "buildingId" INTEGER,
ADD COLUMN     "officeId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("officeId") REFERENCES "Office"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfficeManager" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingManager" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
