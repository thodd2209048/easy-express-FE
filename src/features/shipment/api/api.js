import axios from "axios";
import { baseURL } from "~/api/api";
const pageSize = 5;

export const listShipment = async (condition) => {
  const res = await axios.get(baseURL + "/shipments", {
    params: { ...condition, pageSize },
  });
  return res;
};

export const addShipment = async (values) => {
  const res = await axios.post(baseURL + "/customer/shipments", values);
  return res;
};

export const getShipment = async (number) => {
  const res = await axios.get(baseURL + `/shipments/${number}`);
  return res;
};
