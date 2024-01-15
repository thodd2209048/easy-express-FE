import axios from "axios";
import { baseURL, pageSize } from "~/api/api";

export const listShipment = async (condition) => {
  console.log(condition);
  const res = await axios.get(baseURL + "/shipments", {
    params: { ...condition, pageSize },
  });
  return res;
};

export const addShipment = async (values) => {
  const res = await axios.post(baseURL + "/customer/shipments", values);
  return res;
};
