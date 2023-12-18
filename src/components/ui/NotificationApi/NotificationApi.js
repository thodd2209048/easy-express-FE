import React from "react";
import PropTypes from "prop-types";

NotificationApi.propTypes = {
  response: PropTypes.object,
  showSuccess: PropTypes.bool,
  children: PropTypes.node,
};

function NotificationApi({ response, showSuccess = true, children }) {
  return (
    <div className="mt-2 text-start">
      {showSuccess && response.isSuccess && (
        <div className="alert alert-success" role="alert">
          <h5>Success!</h5>
          {children}
        </div>
      )}
      {response.isError && (
        <div className="alert alert-warning" role="alert">
          <span>{response.error.response?.data.message}</span>
        </div>
      )}
      {response.isPending && (
        <div className="alert alert-secondary" role="alert">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default NotificationApi;
