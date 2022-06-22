import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { page }) => {
      const data = await client.coffeeShop.findMany({
        orderBy: { id: "asc" },
        take: 5,
        skip: 5 * (page - 1),
        include: { user: true, photos: true, categories: true },
      });
      return data;
    },
  },
};
