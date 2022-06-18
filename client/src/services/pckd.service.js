import { getBackendURL } from "../utils";
import axios from "axios";

const createPckd = async (data) => {
  try {
console.log(`${getBackendURL()}/createPckd`)
    const res = await axios({
      method: "post",
      url: `${getBackendURL()}/createPckd`,
      data: data,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

const getTarget = async (pckd) => {
  try {
    const res = await axios({
      method: "post",
      url: `${getBackendURL()}/getTarget`,
      data: {
        pckd,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export { createPckd, getTarget };
