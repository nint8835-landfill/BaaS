import { minweld } from "./minweld";
import { State } from "gm";

interface OperationMap {
  [operation: string]: (image: State) => Promise<State>;
}

export const OPERATIONS: OperationMap = {
  minweld: minweld
};
