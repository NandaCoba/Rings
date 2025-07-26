/*
  Warnings:

  - You are about to drop the column `active` on the `connection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_connection" (
    "connectionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "cors" BOOLEAN NOT NULL DEFAULT true,
    "rateLimit" BOOLEAN NOT NULL DEFAULT true,
    "totalTimeLimit" INTEGER,
    "whenTimeLimit" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_connection" ("connectionId", "cors", "createdAt", "description", "name", "rateLimit", "status", "totalTimeLimit", "updatedAt", "url", "userId", "whenTimeLimit") SELECT "connectionId", "cors", "createdAt", "description", "name", "rateLimit", "status", "totalTimeLimit", "updatedAt", "url", "userId", "whenTimeLimit" FROM "connection";
DROP TABLE "connection";
ALTER TABLE "new_connection" RENAME TO "connection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
