export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
}

export enum ActionType {
  USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED',
  USERS_FETCH_FAILED = 'USERS_FETCH_FAILED',
  USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED',
  USER_DETAIL_FETCH_REQUESTED = 'USER_DETAIL_FETCH_REQUESTED',
  USER_DETAIL_FETCH_SUCCEEDED = 'USER_DETAIL_FETCH_SUCCEEDED',
  USER_DETAIL_FETCH_FAILED = 'USER_DETAIL_FETCH_FAILED',
  
  USER_DETAIL_CREATOR = 'USER_DETAIL_CREATOR',
}

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export enum MethodType  {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface IPagination {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string
}