/*
  Warnings:

  - You are about to drop the column `createdAt` on the `bets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `bets` DROP COLUMN `createdAt`,
    ADD COLUMN `betCreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    ADD COLUMN `userCreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `wallet` DOUBLE NOT NULL DEFAULT 0;
