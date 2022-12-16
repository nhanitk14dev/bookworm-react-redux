export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  isLoggedIn?: boolean;
}

export type UsersType = {
  users: IUser[];
  auth: IUser;
  editUser: IUser;
  isLoggedIn: boolean;
  status?: string;
  msgError?: string;
  flashMessage?: string;
};

export type ChildComponentProps = {
  children: React.ReactElement;
  checkAuth?: boolean;
};

export const UserDefault: IUser = {
  id: "",
  name: "",
  email: "",
  password: "",
  address: "",
};

export const AuthDefault: IUser = {
  id: "",
  name: "",
  email: "",
  password: "",
  address: "",
  isLoggedIn: false,
};

export type AuthType = {
  auth: IUser;
  status: string;
  msgError: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type EditUserFormType = {
  id?: string;
  email: string;
  name: string;
  address: string;
};


export interface IPagination {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}