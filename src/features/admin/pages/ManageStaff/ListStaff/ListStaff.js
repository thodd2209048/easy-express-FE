import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { listStaff } from "../../../api/api";
import styles from "./ListStaff.module.scss";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import Paginate from "~/components/ui/Paginate/Paginate";
import SingleItemDisplay from "~/components/ui/SingleItemDisplay/SingleItemDisplay";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import DeleteStaff from "../DeleteStaff/DeleteStaff";
import UpdateStaff from "../UpdateStaff/UpdateStaff";
import FilterStaff from "./FilterStaff/FilterStaff";

ListStaff.propTypes = {};

function ListStaff(props) {
  const [condition, setCondition] = useState({
    page: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const query = useQuery({
    queryKey: ["staffs", condition],
    queryFn: () => listStaff(condition),
    staleTime: 1000 * 60 * 10,
  });

  const handlePageClick = (e) => {
    navigate(`/admin-panel/staff/list-staff?page=${e.selected + 1}`);
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
      <SubContentLayout subTitle="List of staffs">
        <FilterStaff setCondition={setCondition} />
        {query.isSuccess &&
          query.data.data.content.map((staff) => (
            <SingleItemDisplay
              key={staff.id}
              item={staff}
              keyInfo={staff.name}
              editComponent={UpdateStaff}
              deleteComponent={DeleteStaff}
            >
              <div className={clsx(styles.itemInfo, "row")}>
                <span className="col-3">Id: {staff.id}</span>
                <span className="col-4">Hub: {staff.hubName}</span>
              </div>
            </SingleItemDisplay>
          ))}
      </SubContentLayout>
      {query.isSuccess && (
        <Paginate
          pageCount={query.data?.data.totalPages}
          handlePageClick={handlePageClick}
          currentPage={condition.page}
        />
      )}
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListStaff;
