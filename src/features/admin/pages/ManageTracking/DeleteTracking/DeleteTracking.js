import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { deleteTracking } from "../../../api/api";
import styles from "./DeleteHub.module.scss";

import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

DeleteTracking.propTypes = {
  tracking: PropTypes.object,
  setShowDelete: PropTypes.func,
};

function DeleteTracking({ tracking, setShowDelete }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTracking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trackings"] });
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
          onClick={() => mutation.mutate(tracking.id)}
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

export default DeleteTracking;
