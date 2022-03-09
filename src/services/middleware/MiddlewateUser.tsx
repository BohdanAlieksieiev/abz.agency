import {
  getUsers,
  getUsersParams,
  getPositions,
  postUsers,
  getToken,
} from "../User";
import { createErrorApi } from "../../helpers/helperApi";

export const middlewareGetUsers = async () => {
  try {
    const { data } = await getUsers();
    return data;
  } catch (error: any) {
    return createErrorApi(error);
  }
};

export const middlewareGetUsersParams = async (page: number, count: number) => {
  try {
    const { data } = await getUsersParams(page, count);
    return data;
  } catch (error: any) {
    return createErrorApi(error);
  }
};

export const middlewareGetPositions = async () => {
  try {
    const { data } = await getPositions();
    return data;
  } catch (error: any) {
    return createErrorApi(error);
  }
};

export const middlewarePostUsers = async (user: any) => {
  try {
    const { data } = await postUsers(user);
    return data;
  } catch (error: any) {
    return createErrorApi(error);
  }
};

export const middlewareGetToken = async () => {
  try {
    const { data } = await getToken();
    return data;
  } catch (error: any) {
    return createErrorApi(error);
  }
};
