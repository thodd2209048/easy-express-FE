import PropTypes from "prop-types";

import {
  faCalendarDays,
  faHourglassHalf,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";
import { getNewestPickUpOrdersStatistic } from "~/features/pickUpOrder/api/api";
import styles from "./PickUpOrderStatistic.module.scss";
import PickUpOrderStatisticIndicator from "./PickUpOrderStatisticIndicator/PickUpOrderStatisticIndicator";

PickUpOrderStatistic.propTypes = {
  className: PropTypes.string,
};

function PickUpOrderStatistic({ className }) {
  const query = useQuery({
    queryKey: ["pickUpOrderStatistic"],
    queryFn: () => getNewestPickUpOrdersStatistic(),
  });

  console.log(query);
  return (
    <div className={clsx(styles.wrapper, className, "mt-2")}>
      {query.isSuccess && (
        <Row>
          <Col xs={12} md={6} lg={4}>
            <PickUpOrderStatisticIndicator
              title="Unfinished"
              value={query.data.data.unfinishedOrder}
              icon={faCalendarDays}
              color="#6f42c1"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <PickUpOrderStatisticIndicator
              title="In-process"
              value={query.data.data.inProcessOrder}
              icon={faHourglassHalf}
              color="#0dcaf0"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <PickUpOrderStatisticIndicator
              title="Overdue"
              value={query.data.data.missedDeadlineOrder}
              icon={faCircleExclamation}
              color={"#fd7e14"}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default PickUpOrderStatistic;
