/*
  Warnings:

  - Made the column `genre` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "genre" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
