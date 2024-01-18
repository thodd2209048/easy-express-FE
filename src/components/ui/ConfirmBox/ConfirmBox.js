import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./ConfirmBox.module.scss";
import { Button } from "react-bootstrap";
import NotificationApi from "../NotificationApi/NotificationApi";

ConfirmBox.propTypes = {};

function ConfirmBox({ className, action, setIsShowBox, message, response }) {
  const defaultMessage = "Confirm your action!";

  useEffect(() => {
    if (response?.isSuccess) {
      setIsShowBox(false);
    }
  }, [response]);

  return (
    <div className={clsx(styles.wrapper, className, "border rounded p-2 my-2")}>
      <h5 className="text-center mb-3">{message || defaultMessage}</h5>
      <div className={clsx(styles.btnContainer, "gap-4")}>
        <Button className="px-3" onClick={() => setIsShowBox(false)}>
          No
        </Button>
        <Button
          className="px-3"
          onClick={() => action()}
          variant="outline-danger"
        >
          Yes
        </Button>
      </div>
      <NotificationApi response={response} />
    </div>
  );
}

export default ConfirmBox;
