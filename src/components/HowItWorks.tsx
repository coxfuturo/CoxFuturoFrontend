import { steps } from "../data/howItWorks";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-[#181A25] via-[#1C2030] to-crypto-blue/80"
    >
      {/* 🌤 Soft Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-crypto-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* 🛣 Road Line */}
      <div
        className="absolute left-1/2 top-0 h-full w-[2px]
        bg-gradient-to-b from-transparent via-crypto-purple/30 to-transparent
        hidden md:block"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Our Software Development Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A clear roadmap from idea to launch, ensuring transparency, quality,
            and on-time delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Step Card */}
                <div
                  className={`relative bg-white/5 backdrop-blur-sm border border-white/10
                  rounded-xl p-8 max-w-md w-full transition-all duration-300
                  hover:bg-white/10 hover:shadow-xl hover:shadow-crypto-purple/10
                  ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  {/* Step Number */}
                  <span className="absolute -top-4 -left-4 bg-crypto-blue
                    border border-crypto-purple/30 rounded-md text-crypto-purple
                    font-bold text-lg px-3 py-1"
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="bg-crypto-purple/20 rounded-xl w-12 h-12
                    flex items-center justify-center mb-5 text-crypto-purple"
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Road Node */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-crypto-purple
                    shadow-lg shadow-crypto-purple/40
                    border-4 border-[#181A25]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
