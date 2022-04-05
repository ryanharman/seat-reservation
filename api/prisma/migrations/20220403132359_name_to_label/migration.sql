/*
  Warnings:

  - You are about to drop the column `name` on the `BookableItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookableItem" DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL DEFAULT E'';
