import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
