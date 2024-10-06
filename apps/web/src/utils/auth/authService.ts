import { customAxios } from "../customAxios";

export const fetchUserData = async () => {
  try {
    const { data } = await customAxios.get("/user");
    return data;
  } catch (error) {
    return error;
  }
};

export const authorizeAccess = async (accessToken: String) => {
  console.log(accessToken)
  try {
    const response = await customAxios.post(
      "/auth",
      {
        "token" : accessToken,
      },
      {
        headers: {
          "Content-Type" : "application/json",
        },
      },
    );

    const { accessToken: newAccessToken, refreshToken } = response.data;

    if (newAccessToken && refreshToken) {
      localStorage.setItem("accessToken", newAccessToken)
      localStorage.setItem("refreshToken", refreshToken)
    }

    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
      const userData = await fetchUserData();
      console.log(userData)
      window.location.replace("/community")
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};