import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import api from "~/config/api/axiosConfig";
import styles from "./ListHub.module.scss";

import Notification from "~/components/Notification/Notification";

ListHub.propTypes = {};

function ListHub(props) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const fetchApi = async () => {
    setResponse({ data: null, error: null, isLoading: true });
    try {
      const res = await api.get("api/hub");
      setResponse({ data: res.data, error: null, isLoading: false });
    } catch (err) {
      setResponse({ data: null, error: err.response.data, isLoading: false });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(response.data);
  return (
    <>
      <div className={clsx(styles.list, "mt-3 rounded")}>
        <h5>List of hubs</h5>
        {response.data?.content.map((hub, idx) => (
          <div className="text-start">
            <h5>{hub.name}</h5>
            <p>{hub.location}</p>
          </div>
        ))}
      </div>
      <Notification response={response} />
    </>
  );
}

export default ListHub;
