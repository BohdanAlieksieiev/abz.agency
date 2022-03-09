export const TOKEN = "TOKEN";

const SET_TOKEN = "SET_COUNT";
const SET_REFRESH_USERS = "SET_REFRESH_USERS";

export interface UserState {
  token: string;
  refreshUsers: boolean;
}

const initialState: UserState = {
  token: window.localStorage.getItem(TOKEN) || "",
  refreshUsers: false,
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TOKEN:
      window.localStorage.setItem(TOKEN, action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case SET_REFRESH_USERS:
      return {
        ...state,
        refreshUsers: !state.refreshUsers,
      };
    default:
      return state;
  }
}

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setRefreshUsers = () => ({
  type: SET_REFRESH_USERS,
});
