/*
  Warnings:

  - You are about to drop the column `password` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "password",
DROP COLUMN "role";
