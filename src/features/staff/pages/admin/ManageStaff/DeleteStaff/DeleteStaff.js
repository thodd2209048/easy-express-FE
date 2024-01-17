import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import styles from "./DeleteStaff.module.scss";
import { deleteStaff } from "~/features/staff/api/api";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

DeleteStaff.propTypes = {
  item: PropTypes.object,
  setShowDelete: PropTypes.func,
};

function DeleteStaff({ item, setShowDelete }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
    },
  });

  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      <p className={clsx(styles.question, "mb-1")}>
        Are you sure you want to delete this item?
      </p>
      <div className={clsx(styles.buttons)}>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => mutation.mutate(item.id)}
        >
          Yes
        </Button>
        <Button size="sm" className="ms-4" onClick={() => setShowDelete(false)}>
          No
        </Button>
      </div>
      <NotificationApi response={mutation} />
    </div>
  );
}

export default DeleteStaff;
