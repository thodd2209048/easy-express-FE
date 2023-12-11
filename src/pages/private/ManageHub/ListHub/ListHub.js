// import PropTypes from "prop-types";

// import styles from "./ListHub.module.scss";

import { useQuery } from "@tanstack/react-query";
import { listHub } from "~/api/api";

import NotificationApi from "~/components/NotificationApi/NotificationApi";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";
import SingleHubDisplay from "../SingleHubDisplay/SingleHubDisplay";

ListHub.propTypes = {};

function ListHub(props) {
  const query = useQuery({ queryKey: ["hubs"], queryFn: listHub });

  return (
    <>
      {query.isSuccess && (
        <SubContentLayout subTitle="List of hubs">
          {query.data.data.content.map((hub, idx) => (
            <SingleHubDisplay key={idx} hub={hub} idx={idx} />
          ))}
        </SubContentLayout>
      )}
      <NotificationApi response={query} showSuccess={false} />
    </>
  );
}

export default ListHub;
