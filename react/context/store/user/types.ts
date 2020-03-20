export type State = {
  name: string;
};

export type Context = {
  state: State;
  dispatch: (value: any) => void;
};

export type Action = {
  type: any;
  value: any;
};

export type ProviderProps = {
  reducer: React.Reducer<State, Action>;
  initialState: State;
  children: React.ReactChild;
};
