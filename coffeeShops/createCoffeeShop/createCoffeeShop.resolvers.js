import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, categories },
        { loggedInUser }
      ) => {
        const categoryConnect = categories.map((category) => {
          return { where: { name: category }, create: { name: category } };
        });
        const coffeeShop = await client.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            user: {
              connect: { id: loggedInUser.id },
            },
            ...(categoryConnect.length > 0 && {
              categories: {
                connectOrCreate: categoryConnect,
              },
            }),
          },
        });
        console.log(coffeeShop);
        return { ok: true };
      }
    ),
  },
};
