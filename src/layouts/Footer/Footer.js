import React from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss";
import images from "~/assets/images";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className={clsx(styles.wrapper, "container-fluid p-0")}>
      <div className={clsx("container-fluid border-top mt-5 p-0")}>
        <div className="container">
          <div className={clsx("row  p-2 ")}>
            <div className="col-6 col-md-3">
              <div className={clsx(styles.logoContainer)}>
                <img className={clsx(styles.logo)} src={images.logo} alt="" />
              </div>
            </div>
            <div className="col">
              <h5>Easy express</h5>
              <p className="m-0">Tel: +84 99 999 999</p>
              <p className="m-0">Email: cs@easyexpress.com</p>
              <p className="m-0">28, Hoi Nong Dan, Cau Giay, Ha Noi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
