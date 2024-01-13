import * as Yup from "yup";
import { shipmentStatus } from "~/config/constant/constant";

// export const hub = Yup.object({
//   name: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .min(4, "Must be 4 characters or more")
//     .required("Required"),
//   location: Yup.string()
//     .max(100, "Must be 100 characters or less")
//     .min(10, "Must be 10 characters or more")
//     .required("Required"),
//   districtCode: Yup.number()
//     .integer("Must be integer")
//     .positive("Must be positive")
//     .required("Required"),
// });

// export const staff = Yup.object({
//   name: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .min(4, "Must be 4 characters or more")
//     .required("Required"),
//   hubId: Yup.number().positive("Must be positive").required("Required"),
// });

// export const filterStaff = Yup.object({
//   hubId: Yup.number().positive("Must be positive"),
//   sortField: Yup.string(),
//   direction: Yup.string(),
//   searchTerm: Yup.string(),
// });

// export const filterShipment = Yup.object({
//   hubId: Yup.number().positive("Must be positive"),
//   shipmentStatus: Yup.string().oneOf(
//     [...shipmentStatus, ""],
//     "Please select one option"
//   ),
//   startDateTime: Yup.string(),
// });
