import React, { useState } from 'react';
import { ADD_USER } from '../redux/actions/users.actions';
import { store } from '../redux/store';

const saveUser = (name: string, setNameDispatcher: any) => {
  if (name.trim().length > 0) {
    const id = Math.round(Math.random() * 100);
    const user = { name, id };
    store.dispatch(ADD_USER({ user }));
    setNameDispatcher('');
  } else {
    alert('Usuario no válido');
  }
}

export function UserForm(props: any) {
  const [name, setName] = useState('');
  return (
    <div className={props.className}>
      <label>Nombre del usuario</label>
      <br />
      <input value={name} type='text' onChange={(e) => setName(e.target.value)} />
      <br /> <br />
      <button onClick={() => saveUser(name, setName)}>
        Añadir usuario
      </button>
    </div>
  );
}