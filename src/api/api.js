import axios from "axios";

const baseURL = `http://localhost:8080/api`;
const pageSize = 10;

export { baseURL, pageSize };

export const listProvince = async () => {
  const res = await axios.get(baseURL + "/regions/provinces");
  return res;
};

export const listDistrict = async (provinceCode) => {
  const res = await axios.get(baseURL + "/regions/districts", {
    params: { provinceCode: provinceCode },
  });

  return res;
};
