import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import clsx from "clsx";

import styles from "./DeleteHub.module.scss";
import api from "~/config/api/axiosConfig";
import Notification from "~/components/Notification/Notification";

DeleteHub.propTypes = {};

function DeleteHub({ hub, setIsDeleting, deleteHub, idx }) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const handleSubmit = async () => {
    setResponse({ status: null, error: null, isLoading: true });
    try {
      const res = await api.delete(`api/hub/${hub.id}`);
      setResponse({ status: res.status, error: null, isLoading: false });
      deleteHub(idx);
    } catch (err) {
      setResponse({ status: null, error: err.response.data, isLoading: false });
    }
  };

  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <p className={clsx(styles.question, "mb-1")}>
        Are you sure you want to delete this item?
      </p>
      <div className={clsx(styles.buttons)}>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => handleSubmit()}
        >
          Yes
        </Button>
        <Button size="sm" className="ms-4" onClick={() => setIsDeleting(false)}>
          No
        </Button>
      </div>
      <Notification response={response} />
    </div>
  );
}

export default DeleteHub;
