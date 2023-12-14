import Footer from "../Footer/Footer";
import Header from "../Header/Header";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="mt-3 container">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
