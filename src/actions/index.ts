import { ActionType } from "../models/user.model";

export const fetchUsersAction = (payload?: string) => ({
  type: ActionType.USERS_FETCH_REQUESTED,
  payload
});