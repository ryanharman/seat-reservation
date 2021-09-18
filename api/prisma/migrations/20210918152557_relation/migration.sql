/*
  Warnings:

  - You are about to drop the column `buildingId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_officeId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "buildingId",
DROP COLUMN "officeId";
