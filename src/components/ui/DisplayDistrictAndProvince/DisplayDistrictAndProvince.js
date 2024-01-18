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
    <div>
      <p className="m-0 d-none d-lg-block">
        {district?.name}
        {isSuccess && " - "}
        {district?.province.name}
      </p>
      <div className="d-block d-lg-none">
        <p className="m-0"> {district?.name}</p>
        <p className="m-0"> {district?.province.name}</p>
      </div>
    </div>
  );
}

export default DisplayDistrictAndProvince;
