import React from "react";
import PropTypes from "prop-types";
import Section from "~/components/ui/Section/Section";
import { Col, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import images from "~/assets/images";

ShippingServices.propTypes = {};

function ShippingServices(props) {
  return (
    <div className="container">
      <Section title={"Shipping Services"}>
        <Row className="g-4">
          <Col xs={12} sm={6} md={3}>
            <ServiceCard image={images.letterService}>
              Document & Parcel
            </ServiceCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ServiceCard image={images.airService}>Air Freight</ServiceCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ServiceCard image={images.oceanService}>Ocean Freight</ServiceCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ServiceCard image={images.roadService}>Road Freight</ServiceCard>
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default ShippingServices;
