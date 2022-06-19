import { getBackendURL } from "../utils";
import axios from "axios";

const createPckd = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: `${getBackendURL()}/api/pckd/createPckd`,
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
      url: `${getBackendURL()}/api/pckd/getTarget`,
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
