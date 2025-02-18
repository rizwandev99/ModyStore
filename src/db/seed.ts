import "dotenv/config";
import prisma from "./prisma";
import sampleData from "./sample-data";

async function main() {
  try {
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();

    // Seed new data
    await prisma.user.createMany({
      data: sampleData.users,
    });
    await prisma.product.createMany({
      data: sampleData.products,
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
