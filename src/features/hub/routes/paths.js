import { home } from "~/config/homePath";

const hub = home + "hub";
const hubAdmin = hub + "/admin";
const addHub = hubAdmin + "/add-hub";
const listHub = hubAdmin + "/list-hub";
const updateHub = hubAdmin + "/update-hub/:hubId";

export const paths = {
  hub,
  hubAdmin,
  addHub,
  listHub,
  updateHub,
};
