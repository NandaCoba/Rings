/*
  Warnings:

  - Added the required column `pin` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "pin" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_user" ("createdAt", "image", "password", "updatedAt", "userId", "username") SELECT "createdAt", "image", "password", "updatedAt", "userId", "username" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
