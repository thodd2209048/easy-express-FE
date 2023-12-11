import React from "react";
import PropTypes from "prop-types";

NotificationApi.propTypes = {};

function NotificationApi({ mutation, children }) {
  return (
    <div className="mt-2 text-start">
      {mutation.isSuccess && (
        <div className="alert alert-success" role="alert">
          <h5>Success!</h5>
          {children}
        </div>
      )}
      {mutation.isError && (
        <div className="alert alert-warning" role="alert">
          <span>{mutation.error.message}</span>
        </div>
      )}
      {mutation.isPending && (
        <div className="alert alert-secondary" role="alert">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default NotificationApi;
