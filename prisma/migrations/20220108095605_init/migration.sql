-- CreateTable
CREATE TABLE "GeneratedLink" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "redirectURL" TEXT NOT NULL,

    CONSTRAINT "GeneratedLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeneratedLink_redirectURL_key" ON "GeneratedLink"("redirectURL");
