import { createWriteStream } from "fs";
export const Upload = async (avatar, prefix) => {
  let Path = null;
  if (JSON.parse(process.env.UPLOAD_USE_LOCAL_STATIC)) {
    const { filename, createReadStream } = await avatar;
    const newFilename = `${prefix}${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    Path = `http://localhost:4000/static/${newFilename}`;
  } else {
    // TODO: When use other services
  }
  return Path;
};
