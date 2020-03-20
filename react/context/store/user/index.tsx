// import React from 'react'

import { Context, ProviderProps, State, Action } from "./types";

const StateContext = createContext<Context>({} as Context);

export const UserStoreProvider: React.FC<ProviderProps> = ({
  reducer,
  initialState,
  children
}) => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  return (
    <StateContext.Provider value={{ state, dispatch }} children={children} />
  );
};

export const useUserStore = () => useContext(StateContext);

export { initialState } from "./initialState";
