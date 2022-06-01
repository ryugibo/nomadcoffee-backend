import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { page }) => {
      return client.coffeeShop.findMany({
        orderBy: { id: "asc" },
        take: 5,
        skip: 5 * (page - 1),
      });
    },
  },
};
