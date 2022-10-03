/*
  Warnings:

  - You are about to drop the column `issuerUrl` on the `Application` table. All the data in the column will be lost.
  - Added the required column `subdomain` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "baseUrl" TEXT,
    "subdomain" TEXT NOT NULL,
    "domain" TEXT,
    "secret" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientSecret" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Application" ("baseUrl", "clientId", "clientSecret", "createdAt", "description", "id", "name", "secret", "updatedAt") SELECT "baseUrl", "clientId", "clientSecret", "createdAt", "description", "id", "name", "secret", "updatedAt" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
