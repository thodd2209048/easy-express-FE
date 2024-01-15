import { home } from "~/config/homePath";

const staff = home + "staff";
const staffAdmin = staff + "/admin";
const addStaff = staffAdmin + "/add-staff";
const listStaff = staffAdmin + "/list-staff";
const updateStaff = staffAdmin + "/update-staff/:staffId";

export const paths = {
  staff,
  staffAdmin,
  addStaff,
  listStaff,
  updateStaff,
};
