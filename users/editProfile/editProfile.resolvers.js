import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";
import { Upload } from "../../utils";

const editProfileFn = async (
  _,
  { username, newPassword, email, name, location, avatar, githubUsername },
  { loggedInUser }
) => {
  try {
    let avatarURL = null;
    if (avatar) {
      avatarURL = await Upload(avatar, `${loggedInUser.id}-${Date.now()}-`);
    }

    let uglyPassword = null;
    if (newPassword) {
      uglyPassword = await bcrypt.hash(newPassword, 10);
    }

    const ok = await client.user.update({
      where: { id: loggedInUser.id },
      data: {
        username,
        email,
        name,
        location,
        githubUsername,
        ...(uglyPassword && { password: uglyPassword }),
        ...(avatarURL && { avatarURL: avatarURL }),
      },
    });
    if (!ok) {
      throw new Error("Could not update profile.");
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};
export default {
  Mutation: {
    editProfile: protectedResolver(editProfileFn),
  },
};
