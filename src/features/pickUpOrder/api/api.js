import axios from "axios";
import { baseURL, pageSize } from "~/api/api";

const pathApi = "/pickUpOrders";
export const customerPathApi = `/customer${pathApi}`;
export const customerPickUpOrderApi = `${baseURL}${customerPathApi}`;

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
