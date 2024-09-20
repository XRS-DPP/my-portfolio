import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <>
      <div className="lg:w-[65%] lg:mt-5 m-auto">
        <Navbar />
        <main className="flex justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
