import axios from "axios";

import { baseURL, pageSize } from "~/api/api";

export const createOrder = async (values) => {
  const res = await axios.post(baseURL + "/api/customer/orders", values);
  return res;
};
