import { instance } from "./instance";

export const user = async () => {
  return await instance.get(`/users`);
};

export const updateUser = async (data: any) => {
  return await instance.patch(`/users/update`, data);
};

export const logout = async () => {
  return await instance.patch("/auth", { token: localStorage.getItem("refreshToken") as string });
};

export const removeAccount = async () => {
  return await instance.delete("/users");
};
