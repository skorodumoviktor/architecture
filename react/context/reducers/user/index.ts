// import React from 'react'

import * as handlers from "./handlers";

import { Handlers } from "./types";
import { State } from "../../store/user/types";
import * as actionTypes from "../../actions/user/types";

const createReducer = (handlers: Handlers): React.Reducer<any, any> => (
  state: State,
  action: any
) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export const userReducer = createReducer({
  [actionTypes.SET_NAME]: handlers.setName
});
