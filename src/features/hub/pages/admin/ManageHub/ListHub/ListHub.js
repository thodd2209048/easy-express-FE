// import PropTypes from "prop-types";

// import styles from "./ListHub.module.scss";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { listHubWithCondition } from "~/features/hub/api/api";

import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import FilterHub from "./FilterHub/FilterHub";
import SingleItemDisplay from "~/components/ui/SingleItemDisplay/SingleItemDisplay";
import UpdateHub from "../UpdateHub/UpdateHub";
import DeleteHub from "../DeleteHub/DeleteHub";
import Paginate from "~/components/ui/Paginate/Paginate";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

ListHub.propTypes = {};

function ListHub(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });
  const pageSize = 10;
  const query = useQuery({
    queryKey: ["hubs", condition],
    queryFn: () => listHubWithCondition({ ...condition, pageSize }),
    staleTime: 1000 * 60 * 10,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (e) => {
    navigate(`/admin-panel/hub/list-hub?page=${e.selected + 1}`);
  };

  useEffect(() => {
    let pageUrl = new URLSearchParams(location.search).get("page");
    if (pageUrl) {
      setCondition((prev) => ({ ...prev, page: pageUrl - 1 }));
    } else {
      setCondition((prev) => ({ ...prev, page: 0 }));
    }
  }, [location]);

  return (
    <>
      <SubContentLayout subTitle="List of hubs">
        <FilterHub setCondition={setCondition} />
        {query.isSuccess &&
          query.data.data.content.map((hub) => (
            <SingleItemDisplay
              key={hub.id}
              item={hub}
              keyInfo={hub.name}
              editComponent={UpdateHub}
              deleteComponent={DeleteHub}
            >
              <>
                <p className="m-0">{hub.address}</p>
              </>
            </SingleItemDisplay>
          ))}
      </SubContentLayout>
      {query.isSuccess && query.data.data.empty === false && (
        <Paginate
          pageCount={query.data?.data.totalPages}
          handlePageClick={handlePageClick}
          currentPage={condition.page}
        />
      )}
      <NotificationApi response={query} showSuccess={false} />
    </>
  );
}

export default ListHub;
