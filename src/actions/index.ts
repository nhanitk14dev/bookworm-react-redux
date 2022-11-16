import { ActionType, IUser } from "../models/user.model";

export const fetchUsersAction = (payload?: string) => ({
  type: ActionType.USERS_FETCH_REQUESTED,
  payload
});

export const fetchUserAction = (payload: string) => ({
  type: ActionType.USER_DETAIL_FETCH_REQUESTED,
  payload
});

export const addUserDetailCreatorAction = (payload: IUser[]) => ({
  type: ActionType.USER_DETAIL_CREATOR,
  payload
});