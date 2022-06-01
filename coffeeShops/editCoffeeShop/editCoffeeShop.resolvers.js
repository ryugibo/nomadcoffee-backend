import { protectedResolver } from "../../users/users.utils";
import { Upload } from "../../utils";
import client from "../../client";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(
      async (
        _,
        { id, name, latitude, longitude, photos, categories },
        { loggedInUser }
      ) => {
        const oldCoffeeShop = await client.coffeeShop.findFirst({
          where: { id, userId: loggedInUser.id },
          include: {
            photos: { select: { url: true } },
            categories: { select: { name: true } },
          },
        });
        if (!oldCoffeeShop) {
          return { ok: false, error: "CoffeeShop not found." };
        }

        let photoURLs = [];
        if (photos && photos.length > 0) {
          photoURLs = await Promise.all(
            photos.map((photo) => {
              return Upload(photo, `${loggedInUser.id}-`);
            })
          );
        }
        console.log(oldCoffeeShop.photos, photoURLs);

        await client.coffeeShop.update({
          where: { id },
          data: {
            name,
            latitude,
            longitude,
            photos: {
              disconnect: oldCoffeeShop.photos,
              connectOrCreate: photoURLs.map((photoURL) => {
                return {
                  where: { url: photoURL },
                  create: { url: photoURL },
                };
              }),
            },
            categories: {
              disconnect: oldCoffeeShop.categories,
              connectOrCreate: categories.map((category) => {
                return {
                  where: { name: category },
                  create: { name: category },
                };
              }),
            },
          },
        });

        return { ok: true };
      }
    ),
  },
};
