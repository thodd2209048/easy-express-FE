import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";

import { listStaff } from "~/api/api";
import styles from "./ListStaff.module.scss";

import NotificationApi from "~/components/NotificationApi/NotificationApi";
import SingleItemDisplay from "~/components/SingleItemDisplay/SingleItemDisplay";
import UpdateStaff from "../UpdateStaff/UpdateStaff";
import DeleteStaff from "../DeleteStaff/DeleteStaff";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";

ListStaff.propTypes = {};

function ListStaff(props) {
  const [page, setPage] = useState(0);
  const query = useQuery({
    queryKey: ["staffs", page],
    queryFn: () => listStaff(page),
  });

  return (
    <>
      {query.isSuccess && (
        <SubContentLayout>
          {query.data.data.content.map((staff) => (
            <SingleItemDisplay
              key={staff.id}
              item={staff}
              editComponent={UpdateStaff}
              deleteComponent={DeleteStaff}
            >
              <div className={clsx(styles.itemInfo, "row")}>
                <span className="col-1">{staff.id}</span>
                <span className="fw-bold col-7">{staff.name}</span>
                <span className="col-4">{staff.hubName}</span>
              </div>
            </SingleItemDisplay>
          ))}
        </SubContentLayout>
      )}
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListStaff;
