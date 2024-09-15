import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";

const AppLayout = () => {
  return (
    <>
      <div>
        <Header />
        <main className="flex justify-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
