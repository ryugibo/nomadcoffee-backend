import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) {
          throw new Error("User not found.");
        }
        const passwordOk = await bcrypt.compare(password, user.password);
        if (!passwordOk) {
          throw new Error("Incorrect password.");
        }
        const token = JWT.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
