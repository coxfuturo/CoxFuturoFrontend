import React from "react";
import { ClipboardList, Code2, Rocket } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Requirement Analysis",
    description:
      "We analyze your business goals, technical requirements, and target audience to define a clear project roadmap."
  },
  {
    number: "02",
    icon: <Code2 className="h-6 w-6" />,
    title: "Design & Development",
    description:
      "Our team designs intuitive UI/UX and develops scalable, secure software using modern technologies and best practices."
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6" />,
    title: "Testing & Deployment",
    description:
      "We perform rigorous testing, optimize performance, and deploy your application with ongoing support and maintenance."
  }
];
