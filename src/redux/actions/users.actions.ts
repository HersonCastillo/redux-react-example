import { createAction } from "@reduxjs/toolkit";
import { User } from '../states/user.states';

export const ADD_USER = createAction<{
  user: User
}>('ADD_USER');

export const DELETE_USER = createAction<{
  id: number
}>('DELETE_USER');
