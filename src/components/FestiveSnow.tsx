"use client";

const snowflakes = ["❄", "❅", "❆", "✻", "✼"];

const FestiveSnow = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 16 + 10; // 10px – 26px
        const duration = Math.random() * 10 + 8; // 8s – 18s
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.6 + 0.3;

        return (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity
            }}
          >
            {snowflakes[Math.floor(Math.random() * snowflakes.length)]}
          </span>
        );
      })}
    </div>
  );
};

export default FestiveSnow;
