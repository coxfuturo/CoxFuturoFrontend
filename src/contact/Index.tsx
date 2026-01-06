import { useEffect, useState } from "react";

import useScrollAnimation from "@/utils/useScrollAnimation";
import ContactDetails from "./ContactDetails";
const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    document.title = "Contact Us";

    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ContactDetails/>   
    </div>
  );
};

export default Contact;
