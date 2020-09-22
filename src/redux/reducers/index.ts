import { createReducer } from "@reduxjs/toolkit";
import { ADD_USER, DELETE_USER } from "../actions/users.actions";
import { appInitialState } from "../states/app.states";
import { userReducers } from "./users.reducers";

export const appReducers = createReducer(appInitialState, {
  // User State
  [ADD_USER.type]: (state, action) => { state.users = userReducers(state.users, action) },
  [DELETE_USER.type]: (state, action) => { state.users = userReducers(state.users, action) }
});