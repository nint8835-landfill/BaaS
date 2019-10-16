import gm, { State, Dimensions } from "gm";
import request from "request";

export async function getImage(url: string): Promise<State> {
  return gm(request(url));
}

export function getImageSize(image: State): Promise<Dimensions> {
  return new Promise((resolve, reject) => {
    image.size((err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
}
