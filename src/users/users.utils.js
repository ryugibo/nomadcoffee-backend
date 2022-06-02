import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      throw new Error("Invalid token.");
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export function protectedResolver(ourResolver) {
  return function (root, args, context, info) {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please log in to perform this action.",
      };
    }
    return ourResolver(root, args, context, info);
  };
}
