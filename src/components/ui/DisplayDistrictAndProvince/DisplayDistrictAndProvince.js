import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { listDistrict } from "~/api/api";

DisplayDistrictAndProvince.propTypes = {};

function DisplayDistrictAndProvince({ id }) {
  const [district, setDistrict] = useState({
    name: "",
    province: { name: "" },
  });
  const { data, isSuccess } = useQuery({
    queryKey: ["district"],
    queryFn: () => listDistrict(),
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    setDistrict(data?.data.find((item) => item.code === id));
  }, [data, id]);

  return (
    <p className="m-0">
      {district?.name}
      {isSuccess && " - "}
      {district?.province.name}
    </p>
  );
}

export default DisplayDistrictAndProvince;
