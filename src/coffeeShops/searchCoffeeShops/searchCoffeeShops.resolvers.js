import client from "../../client";
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다.`);
      resolve();
    }, ms);
  });
}

export default {
  Query: {
    searchCoffeeShops: async (_, { keyword }) => {
      const coffeeShops = await client.coffeeShop.findMany({
        where: {
          OR: [
            {
              categories: {
                some: { name: { startsWith: keyword, mode: "insensitive" } },
              },
            },
            { name: { startsWith: keyword, mode: "insensitive" } },
          ],
        },
        include: { categories: true },
      });
      return coffeeShops;
    },
  },
};
