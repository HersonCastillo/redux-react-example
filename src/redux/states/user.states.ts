export interface User {
  name: string;
  id?: number;
}

export interface UserState {
  users: User[];
  loading: boolean;
}

export const userInitialState: UserState = {
  users: [],
  loading: false
};