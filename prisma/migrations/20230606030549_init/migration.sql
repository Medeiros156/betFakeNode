/*
  Warnings:

  - A unique constraint covering the columns `[teamA,startDateTime]` on the table `games` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `games_teamA_startDateTime_key` ON `games`(`teamA`, `startDateTime`);
