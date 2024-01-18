import axios from "axios";
import { baseURL } from "~/api/api";
const pageSize = 10;

// ---------- ADMIN ----------

export const listShipment = async (condition) => {
  return await axios.get(baseURL + "/shipments", {
    params: { ...condition, pageSize },
  });
};

export const getShipment = async (number) => {
  return await axios.get(baseURL + `/shipments/${number}`);
};

// ---------- CUSTOMER ----------

export const addShipment = async (values) => {
  return await axios.post(baseURL + "/customer/shipments", values);
};

export const listShipmentForCustomer = async (params) => {
  return await axios.get(baseURL + "/customer/shipments", {
    params: { ...params, pageSize },
  });
};
