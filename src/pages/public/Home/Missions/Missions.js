import React from "react";
import PropTypes from "prop-types";
import Section from "~/components/ui/Section/Section";
import MissionItem from "./MissionItem/MissionItem";
import images from "~/assets/images";

Missions.propTypes = {};

function Missions(props) {
  return (
    <div>
      <Section title={"About us"}>
        <div className="d-flex flex-column gap-3">
          <MissionItem
            title="Green Logistics"
            image={images.greenRoad}
            contentPosition="start"
          >
            Sustainable business begins with sustainable supply chains. As the
            pioneer of green logistics, we have an unmatched portfolio of green
            logistics solutions. Find out what we have to offer, why we’re
            committed to sustainability, and how our industry is helping deliver
            a sustainable future.
          </MissionItem>
          <MissionItem
            title="Our Division"
            image={images.ourDivision}
            contentPosition="end"
          >
            Easy Express connects people in over 220 countries and territories
            worldwide. Driven by the power of more than 600,000 employees, we
            deliver integrated services and tailored solutions for managing and
            transporting letters, goods and information.
          </MissionItem>
          <MissionItem
            title="Insights and Innovation"
            image={images.exhibition}
            contentPosition="start"
          >
            To enable collaboration, the company brings together customers,
            research and academic institutions, industry partners, and logistics
            experts within the Easy Express business divisions. As a thought
            leader in the logistics industry, Easy Express structurally invests
            in trend research and solution development.
          </MissionItem>
        </div>
      </Section>
    </div>
  );
}

export default Missions;
