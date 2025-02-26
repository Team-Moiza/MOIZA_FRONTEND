import { instance } from "./instance";

export const user = async () => {
  return await instance.get(`/users`);
};

export const updateUser = async (data: any) => {
  return await instance.patch(`/users/update`, data);
};
