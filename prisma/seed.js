const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedData() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      password: "password123",
      name: "John Doe",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      password: "password456",
      name: "Jane Smith",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: "user3@example.com",
      password: "password789",
      name: "Michael Johnson",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      email: "user4@example.com",
      password: "passwordabc",
      name: "Emily Davis",
    },
  });

  const user5 = await prisma.user.create({
    data: {
      email: "user5@example.com",
      password: "passwordxyz",
      name: "Sarah Thompson",
    },
  });

  // Create games
  const game1 = await prisma.game.create({
    data: {
      teamA: "Bahia",
      teamB: "Team B",
      oddsA: 2.0,
      oddsB: 3.0,
      oddsDraw: 2.9,
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });

  const game2 = await prisma.game.create({
    data: {
      teamA: "Team X",
      teamB: "Bahia",
      oddsA: 1.5,
      oddsB: 2.5,
      oddsDraw: 2.9,
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });

  const game3 = await prisma.game.create({
    data: {
      teamA: "Team Y",
      teamB: "Team Z",
      oddsA: 2.3,
      oddsB: 1.8,
      oddsDraw: 2.5,
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });

  const game4 = await prisma.game.create({
    data: {
      teamA: "Team A",
      teamB: "Team B",
      oddsA: 1.7,
      oddsB: 2.2,
      oddsDraw: 2.8,
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });

  const game5 = await prisma.game.create({
    data: {
      teamA: "Team C",
      teamB: "Team D",
      oddsA: 2.1,
      oddsB: 1.9,
      oddsDraw: 2.7,
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });
}

seedData()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
