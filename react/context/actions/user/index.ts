import * as types from "./types";

export const setName = (name: string) => ({
  type: types.SET_NAME,
  payload: { name }
});
