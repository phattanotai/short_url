import { http } from "./http-client";

const getAllUser = async () => {
  try {
    const res = await http().get("/api/users");

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const getUserId = async (userId) => {
  try {
    const res = await http().get(`/api/users/${userId}`);

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export { getUserId, getAllUser };
