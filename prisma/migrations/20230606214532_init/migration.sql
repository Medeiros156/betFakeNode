/*
  Warnings:

  - You are about to drop the column `BetStatus` on the `bets` table. All the data in the column will be lost.
  - You are about to drop the column `GameStatus` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `bets` DROP COLUMN `BetStatus`,
    ADD COLUMN `betStatus` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `games` DROP COLUMN `GameStatus`,
    ADD COLUMN `gameStatus` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `scores` MODIFY `scoreA` INTEGER NULL,
    MODIFY `scoreB` INTEGER NULL;
