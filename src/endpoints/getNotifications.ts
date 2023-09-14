import { api } from "../utils/api";

export const getNotifications = async () => {
  const res = (await api.get('/notifications')).data
  return res;
};