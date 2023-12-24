import axios from "axios";

import { baseURL, pageSize } from "~/api/api";

export const listStaff = async ({
  page,
  hubId,
  sortField,
  direction,
  searchTerm,
}) => {
  let hubIdParamString = hubId === undefined ? "" : `&hubId=${hubId}`;
  let sortFieldString =
    sortField === undefined ? "" : `&sort-field=${sortField}`;
  let directionParamString =
    direction === undefined ? "" : `&direction=${direction}`;
  let searchTermParamString =
    searchTerm === undefined ? "" : `&search=${searchTerm}`;

  const res = await axios.get(
    baseURL +
      `/api/staffs?page=${page}&size=${pageSize}${hubIdParamString}${sortFieldString}${directionParamString}${searchTermParamString}`
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

export const listHub = async ({ page, sortField, direction }) => {
  let sortFieldString =
    sortField === undefined ? "" : `&sort-field=${sortField}`;
  let directionParamString =
    direction === undefined ? "" : `&direction=${direction}`;

  const res = await axios.get(
    baseURL +
      `/api/hubs?page=${page}&size=${pageSize}${sortFieldString}${directionParamString}`
  );

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

export const deleteTracking = async (id) => {
  const res = await axios.delete(baseURL + `/api/trackings/${id}`);
  return res;
};
