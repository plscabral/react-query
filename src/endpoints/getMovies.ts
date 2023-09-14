import { api } from "../utils/api";

export const getMovies = async () => {
  const res = (await api.get('/movies')).data
  return res;
};