/*
  Warnings:

  - A unique constraint covering the columns `[teamA,teamB]` on the table `scores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `scores_teamA_teamB_key` ON `scores`(`teamA`, `teamB`);
