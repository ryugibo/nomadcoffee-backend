import client from "../client";

export default {
  Mutation: {
    createCoffee: (_, { name, price }) =>
      client.coffee.create({ data: { name, price } }),
    deleteCoffee: (_, { id }) => client.coffee.delete({ where: { id } }),
    updateCoffee: (_, { id, price }) =>
      client.coffee.update({ where: { id }, data: { price } }),
  },
};
