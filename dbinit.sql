CREATE DATABASE IF NOT EXISTS prisma;

USE prisma;

CREATE TABLE "Package" (
  "id"        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "distance"  INT4,
  "delivered" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "from"     TEXT,
  "to"      TEXT
);
 