import axios from "axios";
import { baseURL, pageSize } from "~/api/api";

export const listStaff = async (condition) => {
  const res = await axios.get(baseURL + `/api/staffs`, {
    params: { ...condition, pageSize },
  });

  return res;
};

export const addStaff = async (values) => {
  const res = await axios.post(baseURL + "/staffs", values);
  return res;
};

export const updateStaff = async (id, values) => {
  const res = await axios.put(baseURL + `/staffs/${id}`, values);
  return res;
};

export const deleteStaff = async (id) => {
  const res = await axios.delete(baseURL + `/staffs/${id}`);
  return res;
};
