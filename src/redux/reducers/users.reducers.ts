import { createReducer } from '@reduxjs/toolkit';
import { ADD_USER, DELETE_USER } from '../actions/users.actions';
import { userInitialState } from '../states/user.states';

export const userReducers = createReducer(userInitialState, (builder) => {
  builder.addCase(ADD_USER, (state, action) => ({
    ...state,
    users: [...state.users, action.payload.user]
  }));
  builder.addCase(DELETE_USER, (state, action) => ({
    ...state,
    users: state.users.filter((user) => (user.id !== action.payload.id))
  }))
});