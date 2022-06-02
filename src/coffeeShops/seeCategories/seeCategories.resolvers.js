import client from "../../client";

export default {
  Query: {
    seeCategories: (_, { page }) => {
      return client.category.findMany({
        orderBy: { id: "asc" },
        take: 5,
        skip: 5 * (page - 1),
      });
    },
  },
};
