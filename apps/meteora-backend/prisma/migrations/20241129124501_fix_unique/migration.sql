/*
  Warnings:

  - A unique constraint covering the columns `[displayName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayName]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayName]` on the table `Size` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Category_displayName_key" ON "Category"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Color_displayName_key" ON "Color"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Size_displayName_key" ON "Size"("displayName");
