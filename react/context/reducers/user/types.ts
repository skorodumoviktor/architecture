import { State } from "../../store/user/types";

export type Handlers = {
  [key: string]: (state: State, action: any) => void;
};

export type Payload = any;
