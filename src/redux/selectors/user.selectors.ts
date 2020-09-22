import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../states/app.states";

const userState = (state: AppState) => state.users;

export const getUsersList = createSelector(
  userState,
  (state) => (state.users)
);