import { http } from "./http-client";

const checkError = (error) => {
  let message = "error";
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    message = "Unauthorized";
  }
  throw new Error(message);
};

const login = async (data) => {
  try {
    const res = await http()
      .post("/api/auth/login", data)
      .catch((error) => {
        checkError(error);
      });
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const register = async (data) => {
  try {
    const res = await http().post("/api/users", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const initUser = async () => {
  try {
    const res = await http()
      .get("/api/auth/profile")
      .catch((error) => {
        checkError(error);
      });
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export { login, register, initUser };
