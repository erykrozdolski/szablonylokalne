import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-black text-slate-100">
      <Navbar />
      <div className="max-w-4xl lg:mx-auto p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
