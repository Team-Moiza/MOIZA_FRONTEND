import { instance } from "./instance";
import cookies from "js-cookie";

export const user = async () => {
  return await instance.get(`/users`);
};

export const updateUser = async (data: any) => {
  return await instance.patch(`/users/update`, data);
};

export const logout = async () => {
  return await instance.patch("/auth", { token: cookies.get("refreshToken") as string });
};

export const removeAccount = async () => {
  return await instance.delete("/auth");
};

export const downloadPdf = async (id: string): Promise<Blob> => {
  const response = await instance.get(`/users/pdf/${id}`, { responseType: "blob" });
  return response.data;
};

export const pinnedUpdate = async (id: string) => {
  return await instance.patch(`/portfolios/pinned/${id}`);
};
