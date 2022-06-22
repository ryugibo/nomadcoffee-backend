import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { offset }) => {
      const data = await client.coffeeShop.findMany({
        orderBy: { id: "asc" },
        take: 5,
        skip: offset,
        include: { user: true, photos: true, categories: true },
      });
      return data;
    },
  },
};
