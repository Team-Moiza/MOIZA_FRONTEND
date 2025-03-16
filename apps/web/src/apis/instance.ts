import axios from "axios";
import Cookie from "js-cookie";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    if (Cookie.get("access_token")) res.headers.Authorization = `Bearer ${Cookie.get("access_token")}`;
    return res;
  },
  (err) => err
);
