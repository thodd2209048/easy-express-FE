import axios from "axios";
import { baseURL } from "~/api/api";

export const deleteTracking = async (id) => {
  const res = await axios.delete(baseURL + `/trackings/${id}`);
  return res;
};

export const addTracking = async (values) => {
  const res = await axios.post(baseURL + "/trackings", values);
  return res;
};

export const listTrackingOfShipment = async (number) => {
  const res = await axios.get(baseURL + "/public/trackings?shipment=" + number);
  return res;
};
