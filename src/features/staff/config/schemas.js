import * as Yup from "yup";
import { filterSchemas, locationSchemas } from "~/config/schemas";

const addStaff = Yup.object({
  name: locationSchemas.name.required("Required"),
  hubId: filterSchemas.id.required("Required"),
});

const filterStaff = Yup.object({
  hubId: filterSchemas.id,
  sortField: filterSchemas.sortField,
  direction: filterSchemas.direction,
  searchTerm: filterSchemas.searchTerm,
});

const schemas = { addStaff, filterStaff };

export default schemas;
