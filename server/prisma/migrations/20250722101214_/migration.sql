-- CreateTable
CREATE TABLE "user" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "connection" (
    "connectionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "cors" BOOLEAN NOT NULL DEFAULT true,
    "rateLimit" BOOLEAN NOT NULL DEFAULT true,
    "totalTimeLimit" INTEGER,
    "whenTimeLimit" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "listCors" (
    "corsId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "connectionId" INTEGER NOT NULL,
    "urlCors" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "listCors_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "connection" ("connectionId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
