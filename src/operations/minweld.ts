import { State } from "gm";

export const minweld = async (image: State): Promise<State> =>
  image
    .resize(800, 800, "!")
    .blackThreshold(0.5)
    .sharpen(2, 5)
    .wave(10, 100)
    .implode(0.6)
    .gravity("Center")
    .crop(750, 750, undefined, 10);
