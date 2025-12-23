"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { X, Clock, Gift, Sparkles, Zap, Flame, Star, CheckCircle } from "lucide-react";

const OFFER_TEXT =
  "Christmas & New Year Special – Flat 50% OFF on Website Development";

// ⏳ Offer End Date (change anytime)
const OFFER_END_DATE = new Date("2026-01-01T23:59:59").getTime();

const FestiveOffer = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  /* ✨ Generate confetti on mount */
  useEffect(() => {
    const confettiArray = [];
    const emojis = ["🎅", "🎄", "🎁", "✨", "🌟", "⭐", "🎉", "❄️"];
    
    for (let i = 0; i < 15; i++) {
      confettiArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    
    setConfetti(confettiArray);
  }, []);

  /* ✍️ Typing Effect with smoother reset */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (index < OFFER_TEXT.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + OFFER_TEXT[index]);
        setIndex(index + 1);
      }, 40);
    } else {
      // Pause before resetting
      timer = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [index]);

  /* ⏳ Countdown Timer */
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* 🎉 Fireworks effect when time is running low */
  useEffect(() => {
    if (timeLeft.days === "00" && timeLeft.hours === "01") {
      // Trigger confetti effect
      const interval = setInterval(() => {
        const emojis = ["🎉", "✨", "🌟", "⭐", "🎊"];
        const newConfetti = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 0,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        };
        
        setConfetti(prev => [...prev.slice(-20), newConfetti]);
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const handleClaimOffer = useCallback(() => {
    // In a real app, this would navigate to a contact form
    alert("🎉 Congratulations! Redirecting to claim your 50% OFF offer...");
    // You can add navigation logic here
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        className="relative w-full max-w-6xl mx-auto mb-3 sm:mb-10 px-3 sm:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ❌ Close Button */}
        <motion.button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-1 sm:-top-3 sm:-right-1 z-30
          bg-gradient-to-br from-white-800/90 to-white-900/90
          text-white font-bold text-lg w-8 h-8 sm:w-10 sm:h-10
          rounded-full shadow-xl flex items-center justify-center
          border border-white/30 hover:border-white
          hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={14} className="sm:size-[18px]" />
        </motion.button>

        {/* 🔥 LIMITED TIME BADGE */}
        <motion.div
          animate={{ 
            scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
          }}
          transition={{ 
            duration: isHovered ? 0.5 : 2,
            repeat: Infinity 
          }}
          className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20
          bg-gradient-to-r from-red-600 via-red-500 to-red-400
          text-white text-[10px] sm:text-xs font-bold tracking-wider
          px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full shadow-2xl flex items-center gap-1 sm:gap-2
          border border-white/30"
        >
          <Flame size={10} className="sm:size-3 text-orange-200" />
          <span className="text-white drop-shadow-lg whitespace-nowrap">
            LIMITED TIME
          </span>
          <Flame size={10} className="sm:size-3 text-orange-200" />
        </motion.div>

        {/* 🌟 MAIN OFFER CARD */}
        <div
          className="relative
          rounded-2xl sm:rounded-3xl overflow-hidden
          border border-white/30
          shadow-[0_0_40px_rgba(220,38,38,0.4)] sm:shadow-[0_0_60px_rgba(220,38,38,0.5)]
          hover:shadow-[0_0_80px_rgba(220,38,38,0.6)]
          transition-all duration-300"
        >
          {/* 🎨 GRADIENT BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-red-800" />
          
          {/* ✨ ANIMATED GRADIENT OVERLAY */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r
            from-red-600/20 via-red-500/15 to-red-400/10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity 
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* ✨ Sparkle Pattern */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_0%,transparent_40%),
            radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06)_0%,transparent_40%)]" 
          />

          {/* ✨ Background Confetti */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
            {confetti.map((item) => (
              <motion.div
                key={item.id}
                className="absolute text-lg sm:text-xl"
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                initial={{ y: -20, opacity: 0, rotate: 0 }}
                animate={{ 
                  y: [item.y, item.y + 100],
                  opacity: [0, 0.6, 0],
                  rotate: 360,
                  x: [item.x, item.x + (Math.random() * 40 - 20)]
                }}
                transition={{ 
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Left: Offer Text & CTA */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start gap-4 mb-4 sm:mb-6">
                  {/* Emoji & Text Row */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-4xl sm:text-5xl"
                    >
                      🎅
                    </motion.div>
                    
                    <div className="relative">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                        {text || " "}
                        <span className="animate-pulse ml-1 text-red-200">|</span>
                      </h2>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="sm:size-3 text-red-200" />
                        <p className="text-xs sm:text-sm text-white/90 font-medium">
                          Ends: Dec 31, 2025 • Limited Seats
                        </p>
                      </div>
                    </div>
                    
                    {/* <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl sm:text-5xl"
                    >
                      🎁
                    </motion.div> */}
                  </div>

                  {/* Promo Code - Mobile & Desktop */}
                  {/* <div className="w-full max-w-sm mx-auto lg:mx-0">
                    <div className="bg-gradient-to-r from-red-800/60 to-red-700/60 
                    px-4 py-3 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
                      <p className="text-sm sm:text-base text-white font-medium flex items-center justify-center lg:justify-start gap-2">
                        <span className="flex items-center gap-1">
                          <Zap size={12} className="sm:size-4 text-yellow-300" />
                          Promo Code:
                        </span>
                        <span className="ml-1 sm:ml-2 text-yellow-300 font-bold text-base sm:text-lg">
                          FESTIVE50
                        </span>
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/70 mt-1 text-center lg:text-left">
                        Apply at checkout • No advance payment required
                      </p>
                    </div>
                  </div> */}
                </div>

                {/* 🎯 Call to Action Button */}
                {/* <motion.button
                  onClick={handleClaimOffer}
                  className="mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl
                  bg-gradient-to-r from-red-500 to-red-600
                  hover:from-red-600 hover:to-red-700
                  text-white font-bold text-sm sm:text-base md:text-lg
                  shadow-lg hover:shadow-xl hover:shadow-red-500/40
                  flex items-center justify-center gap-2 mx-auto lg:mx-0
                  border border-white/30 hover:border-white/50
                  transition-all duration-300 w-full max-w-xs sm:max-w-sm lg:w-auto"
                  whileHover={{ 
                    scale: 1.03,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Gift size={16} className="sm:size-5 text-yellow-300" />
                  <span className="drop-shadow-lg">CLAIM 50% OFF NOW</span>
                  <Sparkles size={14} className="sm:size-4 text-yellow-300" />
                </motion.button> */}
              </div>

              {/* Right: Countdown Timer */}
              <div className="flex-1 w-full max-w-md">
                <div className="bg-gradient-to-br from-red-900/60 to-red-800/70
                backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20
                shadow-xl">
                  <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                    <Clock size={16} className="sm:size-5 text-yellow-300" />
                    <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider drop-shadow-lg">
                      ⏳ Offer Ends In
                    </h3>
                  </div>
                  
                  {/* Countdown Grid */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    <TimeBox 
                      label="Days" 
                      value={timeLeft.days} 
                      isUrgent={timeLeft.days === "00"}
                      isMobile={true}
                    />
                    <TimeBox 
                      label="Hours" 
                      value={timeLeft.hours} 
                      isUrgent={timeLeft.days === "00" && timeLeft.hours === "00"}
                      isMobile={true}
                    />
                    <TimeBox 
                      label="Minutes" 
                      value={timeLeft.minutes}
                      isUrgent={timeLeft.days === "00" && timeLeft.hours === "00" && timeLeft.minutes === "00"}
                      isMobile={true}
                    />
                    <TimeBox 
                      label="Seconds" 
                      value={timeLeft.seconds}
                      isUrgent={true}
                      isMobile={true}
                    />
                  </div>
                  
                  {/* 🔥 Progress Bar */}
                  <div className="mt-4 sm:mt-6">
                    <div className="flex justify-between text-xs sm:text-sm text-white/90 mb-1 sm:mb-2 font-medium">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Flame size={12} className="sm:size-4 text-yellow-400" />
                        Time Remaining
                      </span>
                      <span className="text-yellow-300 font-bold">
                        {calculatePercentageRemaining()}%
                      </span>
                    </div>
                    <div className="h-2 sm:h-3 bg-red-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                        initial={{ width: "100%" }}
                        animate={{ width: `${calculatePercentageRemaining()}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔗 Additional Benefits */}
            
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FestiveOffer;

/* ---------------- HELPERS ---------------- */

function getRemainingTime() {
  const now = new Date().getTime();
  const diff = OFFER_END_DATE - now;

  if (diff <= 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0")
  };
}

function calculatePercentageRemaining() {
  const totalDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  const now = new Date().getTime();
  const diff = OFFER_END_DATE - now;
  
  if (diff <= 0) return 0;
  if (diff > totalDuration) return 100;
  
  return Math.round((diff / totalDuration) * 100);
}

const TimeBox = ({ 
  label, 
  value, 
  isUrgent = false,
  isMobile = false
}: { 
  label: string; 
  value: string; 
  isUrgent?: boolean;
  isMobile?: boolean;
}) => (
  <motion.div
    animate={isUrgent ? {
      scale: [1, 1.05, 1],
      backgroundColor: ["rgba(185,28,28,0.4)", "rgba(220,38,38,0.7)", "rgba(185,28,28,0.4)"]
    } : {}}
    transition={{ duration: 0.8, repeat: isUrgent ? Infinity : 0 }}
    className={`
      ${isUrgent 
        ? 'bg-gradient-to-br from-red-600 to-red-500 border-red-300 shadow-[0_0_10px_rgba(248,113,113,0.4)]' 
        : 'bg-gradient-to-br from-red-800/50 to-red-700/40 border-white/20'
      }
      border rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center
      backdrop-blur-sm
    `}
  >
    <p className={`${isMobile ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl md:text-3xl'} font-bold ${isUrgent ? 'text-yellow-200' : 'text-white'} drop-shadow-lg`}>
      {value}
    </p>
    <p className={`${isMobile ? 'text-[10px] sm:text-xs' : 'text-xs'} uppercase tracking-wider mt-1 sm:mt-2 text-white/80 font-medium`}>
      {label}
    </p>
  </motion.div>
);

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string;
}) => (
  <div className="flex items-center gap-3 p-3 sm:p-4 bg-red-800/30 rounded-xl border border-white/10
  hover:bg-red-800/40 transition-all duration-300">
    <div className="text-2xl sm:text-3xl">{icon}</div>
    <div>
      <h4 className="text-white text-sm sm:text-base font-semibold">{title}</h4>
      <p className="text-white/70 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
);