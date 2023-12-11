const home = "/";
const adminPanel = home + "admin-panel";
const hub = adminPanel + "/hub";
const addHub = hub + "/add-hub";
const listHub = hub + "/list-hub";
const updateHub = hub + "/update-hub/:hubId";
const staff = adminPanel + "/staff";
const addStaff = staff + "/add-Staff";

const routes = {
  home,
  adminPanel,
  hub,
  addHub,
  listHub,
  updateHub,
  staff,
  addStaff,
};

export default routes;
