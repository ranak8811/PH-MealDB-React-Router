import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";

const Home = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <div className="container mx-auto">
      <Header></Header>

      {/* Render Banner only on the home page */}
      {location.pathname === "/" && <Banner></Banner>}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
