import { State } from "../../store/user/types";

export const setPassword = (state: State, { payload }: any) => ({
  ...state,
  password: payload.password
});
