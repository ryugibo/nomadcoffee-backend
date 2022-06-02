import client from "../../client";

export default {
  Query: {
    seeUser: async (_, { username, followersLastId, followingLastId }) => {
      try {
        const user = await client.user.findUnique({
          where: { username },
          include: {
            followers: {
              take: 1,
              skip: followersLastId ? 1 : 0,
              ...(followersLastId && { cursor: { id: followersLastId } }),
            },
            following: {
              take: 1,
              skip: followingLastId ? 1 : 0,
              ...(followingLastId && { cursor: { id: followingLastId } }),
            },
          },
        });
        if (!user) {
          throw new Error("User not found.");
        }

        console.log(user);

        return { ok: true, user };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    },
  },
};
