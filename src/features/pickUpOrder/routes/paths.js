import { home } from "~/config/homePath";

const pickUpOrder = home + "pick-up-order";

//  CUSTOMER
const pickUpOrderCustomer = pickUpOrder + "/customer";
const createOrder = pickUpOrderCustomer + "/create-order";
const listOrder = pickUpOrderCustomer + "/list-order";
const getOrder = pickUpOrderCustomer + "/get-order";
const getOrderWithId = pickUpOrderCustomer + "/get-order/:id";
//  ADMIN
const pickUpOrderAdmin = pickUpOrder + "/admin";
const listOrderForAdmin = pickUpOrderAdmin + "/list-order";
const getOrderForAdmin = pickUpOrderAdmin + "/get-order";
const getOrderForAdminWithId = getOrderForAdmin + "/:id";
// STAFF
const pickUpOrderStaff = pickUpOrder + "/staff";
const listOrderForStaff = pickUpOrderStaff + "/list-order";
const getOrderForStaff = pickUpOrderStaff + "/get-order";
const getOrderForStaffWithId = getOrderForStaff + "/:id";

export const paths = {
  pickUpOrder,
  pickUpOrderCustomer,
  createOrder,
  listOrder,
  getOrder,
  getOrderWithId,
  //
  pickUpOrderAdmin,
  listOrderForAdmin,
  getOrderForAdmin,
  getOrderForAdminWithId,
  //
  listOrderForStaff,
  getOrderForStaff,
  getOrderForStaffWithId,
};
