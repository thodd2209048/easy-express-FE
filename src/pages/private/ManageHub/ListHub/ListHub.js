import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import api from "~/config/api/axiosConfig";
import styles from "./ListHub.module.scss";

import Notification from "~/components/Notification/Notification";
import UpdateHub from "../UpdateHub/UpdateHub";
import SingleHubDisplay from "../SingleHubDisplay/SingleHubDisplay";

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
        <h4>List of hubs</h4>
        {response.data?.content.map((hub, idx) => (
          <SingleHubDisplay key={idx} hub={hub} />
        ))}
      </div>
      <Notification response={response} />
    </>
  );
}

export default ListHub;
