import clsx from "clsx";

import styles from "./DefaultLayout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <main className={"container"}>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
