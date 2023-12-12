// import PropTypes from "prop-types";

// import styles from "./ListHub.module.scss";

import { useQuery } from "@tanstack/react-query";
import { listHub } from "~/api/api";

import NotificationApi from "~/components/NotificationApi/NotificationApi";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import SingleItemDisplay from "~/components/SingleItemDisplay/SingleItemDisplay";
import UpdateHub from "../UpdateHub/UpdateHub";
import DeleteHub from "../DeleteHub/DeleteHub";

ListHub.propTypes = {};

function ListHub(props) {
  const query = useQuery({ queryKey: ["hubs"], queryFn: listHub });

  return (
    <>
      {query.isSuccess && (
        <SubContentLayout subTitle="List of hubs">
          {query.data.data.content.map((hub, idx) => (
            <SingleItemDisplay
              key={idx}
              item={hub}
              editComponent={UpdateHub}
              deleteComponent={DeleteHub}
            >
              <>
                <h5>{hub.name}</h5>
                <p className="m-0">{hub.location}</p>
              </>
            </SingleItemDisplay>
          ))}
        </SubContentLayout>
      )}
      <NotificationApi response={query} showSuccess={false} />
    </>
  );
}

export default ListHub;
