import "dotenv/config";
import prisma from "../src/db/prisma";
import sampleData from "../src/db/sample-data";

async function main() {
  try {
    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
