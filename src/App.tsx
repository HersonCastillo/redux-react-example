import React from 'react';
import './App.css';
import { UserForm } from './modules/users-form.layout';
import { UsersListLayout } from './modules/users-list.layout';

export function App() {
  return (
    <>
      <UserForm className='container' />
      <UsersListLayout className='container' />
    </>
  );
}

