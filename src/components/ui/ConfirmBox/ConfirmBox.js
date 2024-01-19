import clsx from "clsx";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import NotificationApi from "../NotificationApi/NotificationApi";
import styles from "./ConfirmBox.module.scss";

ConfirmBox.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
  setIsShowBox: PropTypes.func,
  message: PropTypes.string,
  response: PropTypes.object,
};

function ConfirmBox({ className, action, setIsShowBox, message, response }) {
  const defaultMessage = "Confirm your action!";

  useEffect(() => {
    if (response?.isSuccess) {
      setIsShowBox(false);
    }
  }, [response, setIsShowBox]);

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
