import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="mt-5">
      <h3>Home</h3>
      <Button variant="primary">Test</Button>
    </div>
  );
}

export default Home;
