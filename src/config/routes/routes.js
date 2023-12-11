const home = "/";
const adminPanel = home + "admin-panel";
const hub = adminPanel + "/hub";
const addHub = hub + "/add-hub";
const listHub = hub + "/list-hub";
const updateHub = hub + "/update-hub/:hubId";
const staff = adminPanel + "/staff";
const addStaff = staff + "/add-staff";
const listStaff = staff + "/list-staff";

const routes = {
  home,
  adminPanel,
  hub,
  addHub,
  listHub,
  updateHub,
  staff,
  addStaff,
  listStaff,
};

export default routes;
