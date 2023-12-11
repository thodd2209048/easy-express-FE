import React, { useState } from "react";
import PropTypes from "prop-types";

import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import { useQuery } from "@tanstack/react-query";
import { listStaff } from "~/api/api";
import NotificationApi from "~/components/NotificationApi/NotificationApi";

ListStaff.propTypes = {};

function ListStaff(props) {
  // const [staffs, setStaffs] = useState([]);
  const query = useQuery({ queryKey: ["staffs"], queryFn: listStaff });
  console.log(query);
  return (
    <>
      <SubContentLayout></SubContentLayout>
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListStaff;
