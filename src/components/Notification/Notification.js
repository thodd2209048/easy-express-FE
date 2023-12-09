import React from "react";
import PropTypes from "prop-types";

Notification.propTypes = {
  isShowDetail: PropTypes.bool,
};

function Notification({ response, children, isShowSucceed }) {
  return (
    <div className="mt-2 text-start">
      {isShowSucceed && response.data && (
        <div class="alert alert-success" role="alert">
          <h5>Success!</h5>
          {children}
        </div>
      )}
      {response.error && (
        <div class="alert alert-warning" role="alert">
          <span>{response.error.message}</span>
        </div>
      )}
      {response.isLoading && (
        <div class="alert alert-secondary" role="alert">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Notification;
