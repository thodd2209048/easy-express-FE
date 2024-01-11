import { home } from "~/routes/paths/paths";

const customer = home + "customer";
const createShipment = customer + "/create-shipment";
const createPickUpOrder = customer + "/create-pick-up-order";

const paths = {
  customer,
  createShipment,
  createPickUpOrder,
};

export default paths;
