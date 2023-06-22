/*
  Warnings:

  - You are about to drop the column `authorId` on the `bets` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `bets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bets` DROP COLUMN `authorId`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `bets` ADD CONSTRAINT `bets_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
