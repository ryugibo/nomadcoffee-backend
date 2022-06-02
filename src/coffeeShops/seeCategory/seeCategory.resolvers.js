import client from "../../client";

export default {
  Query: {
    seeCategory: async (_, { name }) => {
      return client.category.findUnique({ where: { name } });
    },
  },
};
