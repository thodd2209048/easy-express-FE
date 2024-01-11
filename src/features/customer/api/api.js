import axios from "axios";

import { baseURL, pageSize } from "~/api/api";

export const createPickUpOrder = async (values) => {
  const res = await axios.post(baseURL + "/api/customer/pickUpOrders", values);
  return res;
};
