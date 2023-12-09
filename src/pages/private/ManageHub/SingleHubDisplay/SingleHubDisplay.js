import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import styles from "./SingleHubDisplay.module.scss";

import UpdateHub from "../UpdateHub/UpdateHub";

HubItem.propTypes = {};

function HubItem({ hub }) {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <div className="mt-4">
      <Row className="text-start">
        <Col xs={11}>
          <h5>{hub.name}</h5>
          <p className="m-0">{hub.location}</p>
        </Col>
        <Col xs={1}>
          <div className={clsx(styles.editBtn)}>
            <FontAwesomeIcon
              icon={isEdit ? faRectangleXmark : faPenToSquare}
              onClick={() => toggleEdit()}
            />
          </div>
        </Col>
      </Row>
      {isEdit && <UpdateHub hubId={hub.id} />}
    </div>
  );
}

export default HubItem;
