import axios from "axios";

const baseURL = `http://localhost:8080`;
const pageSize = 10;

export { baseURL, pageSize };

export const addShipment = async (values) => {
  const res = await axios.post(baseURL + "/api/customer/shipments", values);
  return res;
};

export const listTrackingOfShipment = async (number) => {
  const res = await axios.get(
    baseURL + "/api/public/trackings?shipment=" + number
  );
  return res;
};

export const addTracking = async (values) => {
  const res = await axios.post(baseURL + "/api/trackings", values);
  return res;
};
