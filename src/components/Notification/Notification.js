import React from "react";
import PropTypes from "prop-types";

Notification.propTypes = {};

function Notification({ response }) {
  return (
    <div className="mt-2 text-start">
      {response.data && (
        <div class="alert alert-success" role="alert">
          <h5>New category added!</h5>
          <span>Name: {response.data.name}</span>
          <span className="ms-4">Id: {response.data.id}</span>
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
