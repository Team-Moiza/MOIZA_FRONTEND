import { instance } from "./instance";
import cookies from "js-cookie";

export const user = async () => {
  return await instance.get(`/users`);
};

export const updateUser = async (data: any) => {
  return await instance.patch(`/users/update`, data);
};

export const logout = async () => {
  console.log(cookies.get("refresh_token"));
  return await instance.patch("/auth", { token: cookies.get("refresh_token") as string });
};

export const removeAccount = async () => {
  return await instance.delete("/users");
};
