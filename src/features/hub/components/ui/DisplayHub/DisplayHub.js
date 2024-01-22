import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { listHubWithCondition } from "~/features/hub/api/api";

DisplayHub.propTypes = {
  id: PropTypes.number,
};

function DisplayHub({ id }) {
  const [hub, setHub] = useState({
    id: 0,
    name: "",
  });

  const { data, isSuccess } = useQuery({
    queryKey: ["hubs"],
    queryFn: () => listHubWithCondition(),
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    setHub(data?.data.content.find((item) => item.id === id));
  }, [data, id]);

  return (
    <div>
      {isSuccess && !!id && (
        <div>
          <p className="m-0">
            Hub: {hub?.id} - {hub?.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default DisplayHub;
