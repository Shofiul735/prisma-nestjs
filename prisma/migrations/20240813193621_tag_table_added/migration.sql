-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_title_key" ON "Tag"("title");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
