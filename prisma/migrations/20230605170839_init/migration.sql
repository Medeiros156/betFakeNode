/*
  Warnings:

  - The primary key for the `bets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `bets` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - Added the required column `betId` to the `bets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `bets` DROP FOREIGN KEY `bets_authorId_fkey`;

-- AlterTable
ALTER TABLE `bets` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `betId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`betId`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userId`);

-- AddForeignKey
ALTER TABLE `bets` ADD CONSTRAINT `bets_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
