import Hero from "./Hero/Hero";
import LogisticsSolutions from "./LogisticsSolutions/LogisticsSolutions";
import Missions from "./Missions/Missions";
import ShippingServices from "./ShippingServices/ShippingServices";

Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <Hero />
      <ShippingServices />
      <LogisticsSolutions />
      <Missions />
    </div>
  );
}

export default Home;
