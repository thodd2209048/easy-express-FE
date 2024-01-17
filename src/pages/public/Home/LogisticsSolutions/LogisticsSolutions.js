import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./LogisticsSolutions.module.scss";
import LogisticCard from "./LogisticCard/LogisticCard";
import images from "~/assets/images";
import Section from "~/components/ui/Section/Section";
import { Col, Row } from "react-bootstrap";

LogisticsSolutions.propTypes = {};

function LogisticsSolutions({ className }) {
  return (
    <div className={clsx(styles.wrapper, className, "mt-5")}>
      <Section title={"Logistics Solutions"}>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          <Col xs={12} md={4}>
            <LogisticCard
              images={images.logistic1}
              cardTitle={"Warehouse Solutions"}
            ></LogisticCard>
          </Col>
          <Col xs={12} md={4}>
            <LogisticCard
              images={images.logistic2}
              cardTitle={"Transport and Distribution"}
            ></LogisticCard>
          </Col>
          <Col xs={12} md={4}>
            <LogisticCard
              images={images.logistic3}
              cardTitle={"Contract Logistics"}
            ></LogisticCard>
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default LogisticsSolutions;
