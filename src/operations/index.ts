import { minweld } from "./minweld";
import { State } from "gm";

interface OperationMap {
  [operation: string]: (image: State) => Promise<Buffer>;
}

export const OPERATIONS: OperationMap = {
  minweld: minweld
};
