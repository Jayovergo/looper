// https://www.prisma.io/blog/prisma-preview-cockroach-db-release
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const getPackages = () => {
  return [
    {
      from: "NY",
      to: "NJ",
      distance: 1000,
      delivered: new Date(),
    },
    {
      from: "NY",
      to: "NJ",
      distance: 1000,
      delivered: new Date(),
    },
  ];
};

async function seed() {
  await Promise.all(getPackages().map((data) => db.package.create({ data })));
}

seed();
