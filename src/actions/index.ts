import { ActionType, IUser } from "../models";

export const fetchUsersAction = (payload?: string) => ({
  type: ActionType.USERS_FETCH_REQUESTED,
  payload,
});

export const fetchUserAction = (payload: string) => ({
  type: ActionType.USER_DETAIL_FETCH_REQUESTED,
  payload,
});

export const addUserDetailCreatorAction = (payload: IUser[]) => ({
  type: ActionType.USER_DETAIL_CREATOR,
  payload,
});

export const updateUserDetailAction = (payload: {}) => ({
  type: ActionType.USER_UPDATE_REQUESTED,
  payload,
});

export const addUserAction = (payload: {}) => ({
  type: ActionType.USER_CREATE_REQUESTED,
  payload,
});

export const loginAction = (payload: {}) => ({
  type: ActionType.USER_LOGIN_REQUESTED,
  payload,
});

export const logoutAction = () => ({
  type: ActionType.USER_SIGN_OUT_REQUESTED,
  payload: {},
});
