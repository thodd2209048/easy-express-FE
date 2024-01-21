import GetOrderForAdmin from "../pages/admin/GetOrderForAdmin/GetOrderForAdmin";
import ListOrdersForAdmin from "../pages/admin/ListOrdersForAdmin/ListOrdersForAdmin";
import ManageOrder from "../pages/admin/ManageOrder/ManageOrder";
import CreatePickUpOrder from "../pages/customer/CreatePickUpOrder/CreatePickUpOrder";
import GetOrder from "../pages/customer/GetOrder/GetOrder";
import ListOrders from "../pages/customer/ListOrders/ListOrders";
import GetOrderForStaff from "../pages/staff/GetOrderForStaff/GetOrderForStaff";
import ListOrdersForStaff from "../pages/staff/ListOrdersForStaff/ListOrdersForStaff";
import { paths } from "./paths";

export const pickUpOrderCustomer = [
  { path: paths.createOrder, component: CreatePickUpOrder },
  { path: paths.listOrder, component: ListOrders },
  { path: paths.getOrderWithId, component: GetOrder },
];

export const pickUpOrderAdmin = [
  {
    path: paths.pickUpOrderAdmin,
    component: ManageOrder,
    child: [
      { path: paths.listOrderForAdmin, component: ListOrdersForAdmin },
      { path: paths.getOrderForAdminWithId, component: GetOrderForAdmin },
    ],
  },
];

export const pickUpOrderStaff = [
  { path: paths.listOrderForStaff, component: ListOrdersForStaff },
  { path: paths.getOrderForStaffWithId, component: GetOrderForStaff },
];
