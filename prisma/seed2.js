const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedData() {
  // Create bets
  await prisma.bet.create({
    data: { teamBet: "bahia", amountBet: 30, gameId: 2, authorId: 2 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamA", amountBet: 40, gameId: 1, authorId: 2 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamB", amountBet: 50, gameId: 3, authorId: 3 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamB", amountBet: 60, gameId: 3, authorId: 3 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamA", amountBet: 70, gameId: 4, authorId: 4 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamA", amountBet: 80, gameId: 2, authorId: 1 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamB", amountBet: 90, gameId: 3, authorId: 5 },
  });
  await prisma.bet.create({
    data: { teamBet: "teamB", amountBet: 100, gameId: 2, authorId: 2 },
  });
}

seedData()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
