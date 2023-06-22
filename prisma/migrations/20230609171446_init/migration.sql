/*
  Warnings:

  - You are about to drop the `scores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `bets_authorId_fkey` ON `bets`;

-- AlterTable
ALTER TABLE `games` ADD COLUMN `scoreA` INTEGER NULL,
    ADD COLUMN `scoreB` INTEGER NULL;

-- DropTable
DROP TABLE `scores`;
