export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  isLoggedIn?: boolean
}

export type ChildComponentProps = {
  children: React.ReactElement;
  checkAuth?: boolean;
};


export const UserDefault = {
  name: '',
  email: '',
  password: '',
  address: '',
  isLoggedIn: false
}