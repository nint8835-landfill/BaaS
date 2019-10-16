import { State } from "gm";
import { promisify } from "util";

export async function minweld(image: State): Promise<Buffer> {
  const newImage = image
    .resize(800, 800, ">")
    .blackThreshold(0.9, 0, 0)
    .sharpen(0)
    .implode(0.2)
    .quality(8);

  return promisify<string, Buffer>(newImage.toBuffer)("PNG");
}
