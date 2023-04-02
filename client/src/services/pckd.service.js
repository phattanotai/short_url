import { http } from "./http-client";

const createPckd = async (data) => {
  try {
    const res = await http().post("/api/url", data);

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const getAllPckd = async () => {
  try {
    const res = await http().get("/api/url");

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const getPckdById = async (pckdId) => {
  try {
    const res = await http().get(`/api/url/${pckdId}`);

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const getPckdInfo = async (pckdId) => {
  try {
    const res = await http().get(`/api/url/getPckdInfo/${pckdId}`);

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

const getHitById = async (hitId) => {
  try {
    const res = await http().get(`/api/url/hit/${hitId}`);

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export { createPckd, getAllPckd, getPckdById, getPckdInfo, getHitById };
