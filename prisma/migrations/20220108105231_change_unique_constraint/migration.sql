/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `GeneratedLink` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "GeneratedLink_redirectURL_key";

-- CreateIndex
CREATE UNIQUE INDEX "GeneratedLink_link_key" ON "GeneratedLink"("link");
