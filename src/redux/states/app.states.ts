import { UserState, userInitialState } from "./user.states";

export interface AppState {
  users: UserState;
}

export const appInitialState: AppState = {
  users: userInitialState
};
