import axios from "axios";
import { baseURL, pageSize } from "~/api/api";

export const listHubWithCondition = async (condition) => {
  return await axios.get(baseURL + "/hubs", {
    params: { ...condition, pageSize },
  });
};

export const addHub = async (values) => {
  return await axios.post(baseURL + "/hubs", values);
};

export const updateHub = async (hubId, values) => {
  return await axios.put(baseURL + `/hubs/${hubId}`, values);
};

export const deleteHub = async (hubId) => {
  return await axios.put(baseURL + `/hubs/${hubId}`);
};
