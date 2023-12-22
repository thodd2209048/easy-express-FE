import { home } from "~/routes/paths/paths";

const customer = home + "customer";
const customerOrders = customer + "/orders";
const createShipment = customer + "/create-shipment";

const paths = {
  customer,
  customerOrders,
  createShipment,
};

export default paths;
