import React, { useState } from "react";

import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import { useQuery } from "@tanstack/react-query";
import { listStaff } from "~/api/api";
import NotificationApi from "~/components/NotificationApi/NotificationApi";
import SingleItemDisplay from "~/components/SingleItemDisplay/SingleItemDisplay";
import UpdateStaff from "../UpdateStaff/UpdateStaff";
import DeleteStaff from "../DeleteStaff/DeleteStaff";

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
              <>
                <span>{staff.id}</span>
                <span className="ms-3 fw-bold">{staff.name}</span>
                <span className="ms-3">{staff.hubId}</span>
              </>
            </SingleItemDisplay>
          ))}
        </SubContentLayout>
      )}
      <NotificationApi response={query} showSuccess={false}></NotificationApi>
    </>
  );
}

export default ListStaff;
