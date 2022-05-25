import bcrypt from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, password, name, location, avatarURL, githubUsername }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: { OR: [{ username }, { email }] },
        });
        if (existingUser !== null) {
          if (existingUser.username === username) {
            throw new Error("username already exists");
          } else if (existingUser.email === email) {
            throw new Error("email already exists");
          } else {
            throw new Error("unhandled error");
          }
        }

        const uglyPassword = await bcrypt.hash(password, 10);

        await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            avatarURL,
            githubUsername,
            password: uglyPassword,
          },
        });
        return { ok: true };
      } catch (error) {
        return { ok: false, error: error.message };
      }
    },
  },
};
