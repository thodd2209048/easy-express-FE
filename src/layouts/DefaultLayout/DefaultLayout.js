import clsx from "clsx";

import styles from "./DefaultLayout.module.scss";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <main className={"container mt-4"}>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
