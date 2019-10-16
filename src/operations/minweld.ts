import { State } from "gm";

export async function minweld(image: State): Promise<State> {
  return image
    .resize(800, 800, ">")
    .blackThreshold(0.9, 0, 0)
    .sharpen(0)
    .implode(0.2)
    .quality(8);
}
