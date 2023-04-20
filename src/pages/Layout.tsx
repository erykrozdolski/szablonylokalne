import { Outlet, Link } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="max-w-7xl lg:mx-auto mx-4  p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
