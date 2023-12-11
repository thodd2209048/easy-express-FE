import * as Yup from "yup";

export const hub = Yup.object({
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  location: Yup.string()
    .max(100, "Must be 100 characters or less")
    .min(10, "Must be 10 characters or more")
    .required("Required"),
});

export const staff = Yup.object({
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  hubId: Yup.number().positive("Must be positive").required("Required"),
});
