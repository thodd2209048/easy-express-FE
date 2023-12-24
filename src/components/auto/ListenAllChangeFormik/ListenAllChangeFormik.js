import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

ListenAllChangeFormik.propTypes = {};

function ListenAllChangeFormik(props) {
  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    submitForm(values);
  }, [values, submitForm]);
  return null;
}

export default ListenAllChangeFormik;
