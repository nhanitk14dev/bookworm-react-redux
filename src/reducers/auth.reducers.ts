import { IUser, IAction, ActionType, AuthDefault } from "../models";
const userLocalStorage = localStorage.getItem("userSession");
const authSession = userLocalStorage
  ? JSON.parse(userLocalStorage)
  : AuthDefault;

export type AuthReducerType = {
  auth: IUser;
  isLoading: boolean;
  status: string;
  error: string;
};

export const initalAuthState: AuthReducerType = {
  auth: authSession,
  isLoading: false,
  status: "",
  error: "",
};

export const authReducer = (
  state: AuthReducerType = initalAuthState,
  action: IAction<IUser>
) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.USER_LOGIN_SUCCEEDED:
      const data = action.payload;
      if (data) {
        const userSession = {
          ...data,
          isLoggedIn: true,
        };
        localStorage.setItem("userSession", JSON.stringify(userSession));
        return {
          ...state,
          auth: userSession,
          status: ActionType.USER_LOGIN_SUCCEEDED,
          isLoading: false,
        };
      }

      return {
        ...state,
        status: ActionType.USER_LOGIN_FAILED,
        isLoading: false,
      };
    case ActionType.USER_LOGIN_FAILED:
      return {
        ...state,
        status: ActionType.USER_LOGIN_FAILED,
        isLoading: false,
      };
    case ActionType.USER_SIGN_OUT_REQUESTED:
      localStorage.removeItem("userSession");
      return {
        ...initalAuthState,
        isLoading: false,
      };
    default:
      return state;
  }
};
