import axios from "axios";

import { baseURL, pageSize } from "~/api/api";

export const createPickUpOrder = async (values) => {
  const res = await axios.post(baseURL + "/api/customer/pickUpOrders", values);
  return res;
};

export const updatePickUpOrder = async (id, values) => {
  const res = await axios.put(
    baseURL + `/api/customer/pickUpOrders${id}`,
    values
  );
  return res;
};
