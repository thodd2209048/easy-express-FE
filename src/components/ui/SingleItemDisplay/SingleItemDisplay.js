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
  keyInfo,
  editComponent,
  deleteComponent,
  children,
  className,
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
    <div className={clsx(styles.wrapper, "mt-1 row", className)}>
      <div className="col ">
        <div className="border rounded p-2">
          <div className={clsx(styles.title, " row")}>
            <div className="col fw-bold">
              <div>{keyInfo}</div>
            </div>
            {(!!editComponent || !!deleteComponent) && (
              <div className={clsx(styles.itemContainer, "col-2")}>
                {!!editComponent && (
                  <FontAwesomeIcon
                    icon={showEdit ? faRectangleXmark : faPenToSquare}
                    className={clsx(styles.btnEdit)}
                    onClick={() => toggleEdit()}
                  />
                )}

                {!!deleteComponent && (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={clsx(styles.btnDelete)}
                    onClick={() => toggleDelete()}
                  />
                )}
              </div>
            )}
          </div>

          <div className={clsx(styles.itemInfo, "row")}>
            <div className="col">
              <div>{children}</div>
            </div>
          </div>

          {showEdit && <EditComponent item={item} />}
          {showDelete && (
            <DeleteComponent item={item} setShowDelete={setShowDelete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleItemDisplay;
