import { api } from "../utils/api";

export const getUsers = async () => {
  const res = (await api.get('/users')).data
  return res;
};