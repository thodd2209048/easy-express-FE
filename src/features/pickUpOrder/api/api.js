import axios from "axios";
import { baseURL, pageSize } from "~/api/api";

const pathApi = "/pickUpOrders";
export const customerRole = `/customer`;
export const adminRole = `/admin`;
export const staffRole = `/staff`;
export const customerPickUpOrderApi = `${baseURL}${customerRole}${pathApi}`;
export const adminPickUpOrderApi = `${baseURL}${adminRole}${pathApi}`;
export const staffPickUpOrderApi = `${baseURL}${staffRole}${pathApi}`;

// ---------- CUSTOMER ----------
export const listPickUpOrders = async (condition) => {
  return await axios.get(customerPickUpOrderApi, {
    params: { ...condition, pageSize },
  });
};

export const getPickUpOrder = async (id) => {
  return await axios.get(`${customerPickUpOrderApi}/${id}`);
};

export const createPickUpOrder = async (values) => {
  return await axios.post(customerPickUpOrderApi, values);
};

export const updatePickUpOrder = async (id, values) => {
  const res = await axios.put(`${customerPickUpOrderApi}/${id}`, values);
  return res;
};

export const deletePickUpOrder = async (id) => {
  const res = await axios.delete(`${customerPickUpOrderApi}/${id}`);
  return res;
};
// ---------- ADMIN ----------

export const listPickUpOrdersForAdmin = async (params) => {
  return await axios.get(adminPickUpOrderApi, {
    params: { ...params, pageSize },
  });
};

export const deletePickUpOrderForAdmin = async (id) => {
  const res = await axios.delete(`${adminPickUpOrderApi}/${id}`);
  return res;
};

// ---------- STAFF ----------

export const updatePickUpOrderForStaff = async (id, values) => {
  const res = await axios.put(`${staffPickUpOrderApi}/${id}`, values);
  return res;
};
