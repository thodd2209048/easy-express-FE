import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./SingleItemDisplay.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRectangleXmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

SingleItemDisplay.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
  editComponent: PropTypes.func,
  deleteComponent: PropTypes.func,
};

function SingleItemDisplay({
  item,
  idx,
  editComponent,
  deleteComponent,
  children,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const EditComponent = editComponent;
  const DeleteComponent = deleteComponent;

  const toggleEdit = () => {
    setShowEdit((prev) => !prev);
    setShowDelete(false);
  };

  const toggleDelete = () => {
    setShowDelete((prev) => !prev);
    setShowEdit(false);
  };

  return (
    <div className="mt-1 p-2 border rounded">
      <div className={clsx(styles.itemInfo, "row")}>
        <div className="col-10">{children}</div>
        <div className={clsx(styles.itemContainer, "col-2")}>
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
      {showEdit && <EditComponent item={item} />}
      {showDelete && (
        <DeleteComponent item={item} setShowDelete={setShowDelete} />
      )}
    </div>
  );
}

export default SingleItemDisplay;
