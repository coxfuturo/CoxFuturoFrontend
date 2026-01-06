// pricingPlansData.ts

export const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: "₹25,000", annual: "₹20,000" },
    description: "Best for startups and small businesses launching their first digital product.",
    features: [
      "Single web application (up to 5 pages)",
      "Responsive UI with modern design",
      "Basic backend & REST API integration",
      "Standard security practices",
      "1 month free maintenance",
      "Email & chat support"
    ],
    buttonText: "Start Project"
  },
  {
    name: "Professional",
    price: { monthly: "₹60,000", annual: "₹50,000" },
    description: "Ideal for growing businesses requiring scalable and high-performance solutions.",
    features: [
      "Custom web or mobile application",
      "Advanced UI/UX design",
      "Secure backend & API development",
      "Database design & optimization",
      "Authentication & role management",
      "Cloud deployment (AWS / Vercel)",
      "2 months post-launch support"
    ],
    highlighted: true,
    buttonText: "Get Free Consultation"
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Tailored solutions for enterprises with complex workflows and integrations.",
    features: [
      "Enterprise-grade custom software",
      "Microservices architecture",
      "High-level security & data protection",
      "Third-party & ERP integrations",
      "Performance optimization & scaling",
      "Dedicated project manager",
      "Priority support & SLA",
      "Long-term maintenance & upgrades"
    ],
    buttonText: "Contact Sales"
  }
];
