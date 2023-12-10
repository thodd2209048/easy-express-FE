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
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";

ListHub.propTypes = {};

function ListHub(props) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const [listHub, setListHub] = useState([]);

  const fetchApi = async () => {
    setResponse({ data: null, error: null, isLoading: true });
    try {
      const res = await api.get("api/hub");
      setResponse({ data: res.data, error: null, isLoading: false });
    } catch (err) {
      setResponse({ data: null, error: err.response.data, isLoading: false });
    }
  };

  const deleteHub = (idx) => {
    setListHub((prev) => {
      const updatedList = [...prev];
      updatedList.splice(idx, 1);
      return updatedList;
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    setListHub(response.data === null ? [] : response.data.content);
  }, [response]);
  return (
    <>
      <SubContentLayout subTitle="List of hubs">
        {listHub?.map((hub, idx) => (
          <SingleHubDisplay
            key={idx}
            hub={hub}
            deleteHub={deleteHub}
            idx={idx}
          />
        ))}
      </SubContentLayout>
      <Notification response={response} />
    </>
  );
}

export default ListHub;
