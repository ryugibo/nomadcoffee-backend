import client from "../client";

export default {
  Category: {
    shops: ({ id }, { page }) => {
      return client.category
        .findUnique({ where: { id } })
        .shops({ take: 5, skip: 5 * (page - 1) });
    },
    totalShops: ({ id }) => {
      return client.coffeeShop.count({
        where: { categories: { some: { id } } },
      });
    },
  },
};
