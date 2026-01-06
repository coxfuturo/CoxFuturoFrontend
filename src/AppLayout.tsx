import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";
import AiAssistant from "./components/AiAssistant";
const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
      <AiAssistant/>
    </div>
  );
};

export default AppLayout;
