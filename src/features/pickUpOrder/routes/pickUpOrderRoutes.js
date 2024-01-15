import CreatePickUpOrder from "../pages/customer/CreatePickUpOrder/CreatePickUpOrder";
import GetOrder from "../pages/customer/GetOrder/GetOrder";
import ListOrders from "../pages/customer/ListOrders/ListOrders";
import UpdatePickUpOrder from "../pages/customer/UpdatePickUpOrder/UpdatePickUpOrder";
import { paths } from "./paths";

export const pickUpOrderCustomer = [
  { path: paths.createOrder, component: CreatePickUpOrder },
  { path: paths.listOrder, component: ListOrders },
  { path: paths.getOrderWithId, component: GetOrder },
];
