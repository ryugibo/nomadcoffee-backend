/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `CoffeeShopPhoto` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CoffeeShopPhoto_url_coffeeShopId_key";

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShopPhoto_url_key" ON "CoffeeShopPhoto"("url");
