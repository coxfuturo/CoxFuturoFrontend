import { useEffect, useState } from "react";

import useScrollAnimation from "@/utils/useScrollAnimation";
import AboutDetails from "./AboutDetails";
const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    document.title = "About";

    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AboutDetails/>   
    </div>
  );
};

export default About;
