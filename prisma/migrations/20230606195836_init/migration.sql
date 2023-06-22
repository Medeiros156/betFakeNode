-- AlterTable
ALTER TABLE `bets` ADD COLUMN `BetStatus` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `games` ADD COLUMN `GameStatus` BOOLEAN NULL DEFAULT true;

-- CreateTable
CREATE TABLE `scores` (
    `scoreId` INTEGER NOT NULL AUTO_INCREMENT,
    `teamA` VARCHAR(191) NOT NULL,
    `teamB` VARCHAR(191) NOT NULL,
    `scoreA` INTEGER NOT NULL,
    `scoreB` INTEGER NOT NULL,

    PRIMARY KEY (`scoreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
