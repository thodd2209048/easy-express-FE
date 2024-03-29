import clsx from "clsx";

import styles from "./LogisticCard.module.scss";

LogisticCard.propTypes = {};

function LogisticCard({ className, images, cardTitle, children }) {
  return (
    <div className={clsx(styles.wrapper, className, "card")}>
      <img src={images} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        {children}
      </div>
    </div>
  );
}

export default LogisticCard;
