import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRectangleXmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";

import styles from "./SingleHubDisplay.module.scss";

import UpdateHub from "../UpdateHub/UpdateHub";
import DeleteHub from "../DeleteHub/DeleteHub";

HubItem.propTypes = {};

function HubItem({ hub, deleteHub, idx }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleEdit = () => {
    setShowEdit((prev) => !prev);
    setShowDelete(false);
  };

  const toggleDelete = () => {
    setShowDelete((prev) => !prev);
    setShowEdit(false);
  };

  return (
    <div className="mt-4 p-2 border rounded">
      <div className={clsx(styles.hubInfo)}>
        <div>
          <h5>{hub.name}</h5>
          <p className="m-0">{hub.location}</p>
        </div>

        <div className={clsx(styles.itemContainer)}>
          <FontAwesomeIcon
            icon={showEdit ? faRectangleXmark : faPenToSquare}
            className={clsx(styles.btnEdit)}
            onClick={() => toggleEdit()}
          />

          <FontAwesomeIcon
            icon={faTrashCan}
            className={clsx(styles.btnDelete)}
            onClick={() => toggleDelete()}
          />
        </div>
      </div>
      {showEdit && <UpdateHub hub={hub} />}
      {showDelete && (
        <DeleteHub hub={hub} setShowDelete={setShowDelete} idx={idx} />
      )}
    </div>
  );
}

export default HubItem;
