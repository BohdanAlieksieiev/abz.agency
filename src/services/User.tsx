import API from "../api/api";
import { TOKEN } from "../reducers/userReducer";

export const getUsers = async () => {
  const url = `/users`;
  return await API.get(url);
};

export const getUsersParams = async (page: number, count: number) => {
  const url = `/users?page=${page}&count=${count}`;
  return await API.get(url);
};

export const getPositions = async () => {
  const url = `/positions`;
  return await API.get(url);
};

export const postUsers = async (user: any) => {
  const url = `/users`;
  return await API.post(url, user, {
    headers: {
      Token: `${window.localStorage.getItem(TOKEN)}`,
    },
  });
};

export const getToken = async () => {
  const url = `/token`;
  return await API.get(url);
};
