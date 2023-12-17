import axios from "axios";

const baseURL = `http://localhost:8080`;
const pageSize = 10;

export const listStaff = async (page) => {
  const res = await axios.get(
    baseURL + `/api/staffs?page=${page}&size=${pageSize}`
  );
  return res;
};

export const addStaff = async (values) => {
  const res = await axios.post(baseURL + "/api/staffs", values);
  return res;
};

export const updateStaff = async (id, values) => {
  const res = await axios.put(baseURL + `/api/staffs/${id}`, values);
  return res;
};

export const deleteStaff = async (id) => {
  const res = await axios.delete(baseURL + `/api/staffs/${id}`);
  return res;
};

export const listHub = async () => {
  const res = await axios.get(baseURL + "/api/hubs");
  return res;
};

export const addHub = async (values) => {
  const res = await axios.post(baseURL + "/api/hubs", values);
  return res;
};

export const updateHub = async (hubId, values) => {
  const res = await axios.put(baseURL + `/api/hubs/${hubId}`, values);
  return res;
};

export const deleteHub = async (hubId) => {
  const res = await axios.delete(baseURL + `/api/hubs/${hubId}`);
  return res;
};

export const listShipment = async (page) => {
  const res = await axios.get(
    baseURL + `/api/shipments?page=${page}&size=${pageSize}`
  );
  return res;
};

export const addShipment = async (values) => {
  const res = await axios.post(baseURL + "/api/shipments", values);
  return res;
};

export const listTrackingOfShipment = async (number) => {
  const res = await axios.get(baseURL + "/api/trackings?shipment=" + number);
  return res;
};

export const addTracking = async (values) => {
  const res = await axios.post(baseURL + "/api/trackings", values);
  return res;
};

export const deleteTracking = async (id) => {
  const res = await axios.delete(baseURL + `/api/trackings/${id}`);
  return res;
};
