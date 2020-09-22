import React, { useEffect, useState } from 'react';
import { getUsersList } from '../redux/selectors/user.selectors';
import { User } from '../redux/states/user.states';
import { store } from '../redux/store';
import { UserComponent } from './user.component';

export function UsersListLayout(props: any) {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setUsers(getUsersList(state));
    });
  });
  return (
    <div className={props.className}>
      {
        users.map((user, index) => <UserComponent key={index} user={user} />)
      }
    </div>
  );
}