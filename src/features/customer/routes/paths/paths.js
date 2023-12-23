import { home } from "~/routes/paths/paths";

const customer = home + "customer";
const createShipment = customer + "/create-shipment";

const paths = {
  customer,
  createShipment,
};

export default paths;
