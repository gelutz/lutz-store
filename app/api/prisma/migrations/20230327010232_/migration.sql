/*
  Warnings:

  - You are about to drop the column `userId` on the `roles` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "roles_userId_key";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "userId";
