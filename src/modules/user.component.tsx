import React from 'react';
import { DELETE_USER } from '../redux/actions/users.actions';
import { store } from '../redux/store';

const deleteUser = (id: number): void => {
  store.dispatch(DELETE_USER({ id }));
}

export const UserComponent = (props: any) => {
  const { id, name } = props.user;
  return (
    <div onClick={() => deleteUser(id)}>
      <span>{id} - {name}</span>
    </div>
  );
}