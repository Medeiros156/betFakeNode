-- AlterTable
ALTER TABLE `User` MODIFY `wallet` INTEGER NULL DEFAULT 1000;

-- AlterTable
ALTER TABLE `bets` ADD COLUMN `betResult` BOOLEAN NULL DEFAULT true;
