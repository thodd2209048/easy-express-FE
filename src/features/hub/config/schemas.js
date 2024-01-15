import * as Yup from "yup";
import { locationSchemas, humanSchemas } from "~/config/schemas";

const addHub = Yup.object({
  name: humanSchemas.name.required("Required"),
  address: locationSchemas.address.required("Required"),
  provinceCode: locationSchemas.provinceCode.required("Required"),
  districtCode: locationSchemas.districtCode.required("Required"),
});

const updateHub = Yup.object({
  name: locationSchemas.name,
  address: locationSchemas.address,
  provinceCode: locationSchemas.provinceCode,
  districtCode: locationSchemas.districtCode,
});

const schemas = { addHub, updateHub };

export default schemas;
