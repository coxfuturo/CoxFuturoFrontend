"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { X, Clock, Gift, Sparkles, Zap, Flame, Star, CheckCircle } from "lucide-react";

const OFFER_TEXT = "New Year Special – Limited Time Offer on Website Development";

// 🎉 New Year Offer End Date
const OFFER_END_DATE = new Date("2026-01-15T23:59:59").getTime();

const NewYearOffer = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  /* 🎆 Generate confetti on mount */
  useEffect(() => {
    const confettiArray = [];
    const emojis = ["🎆", "🎇", "✨", "🌟", "⭐", "🎊", "🥂", "🎉", "🔥", "💫"];
    
    for (let i = 0; i < 20; i++) {
      confettiArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    
    setConfetti(confettiArray);
  }, []);

  /* ✍️ Typing Effect */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (index < OFFER_TEXT.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + OFFER_TEXT[index]);
        setIndex(index + 1);
      }, 40);
    } else {
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

  /* 🎊 Confetti effect when time is running low */
  useEffect(() => {
    if (timeLeft.days === "00" && timeLeft.hours === "01") {
      const interval = setInterval(() => {
        const emojis = ["🎉", "✨", "🎆", "🎇", "🌟"];
        const newConfetti = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 0,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        };
        
        setConfetti(prev => [...prev.slice(-25), newConfetti]);
      }, 400);
      
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const handleClaimOffer = useCallback(() => {
    alert("🎊 Happy New Year! Redirecting to claim your special offer...");
    // Add navigation logic here
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        className="relative w-full max-w-6xl mx-auto mb-3 sm:mb-8 px-3 sm:px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ❌ Close Button */}
        <motion.button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-1 sm:-top-2 sm:-right-2 z-30
          bg-gradient-to-br from-blue-800/90 to-indigo-900/90
          text-white font-bold text-lg w-7 h-7 sm:w-8 sm:h-8
          rounded-full shadow-lg flex items-center justify-center
          border border-white/30 hover:border-white
          hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={12} className="sm:size-[14px]" />
        </motion.button>

        {/* 🎇 LIMITED TIME BADGE */}
        <motion.div
          animate={{ 
            scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
          }}
          transition={{ 
            duration: isHovered ? 0.5 : 2,
            repeat: Infinity 
          }}
          className="absolute -top-3 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20
          bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500
          text-white text-[10px] sm:text-xs font-bold tracking-wider
          px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-xl flex items-center gap-1 sm:gap-2
          border border-white/30"
        >
          <Sparkles size={10} className="sm:size-3 text-yellow-200" />
          <span className="text-white drop-shadow-lg whitespace-nowrap">
            NEW YEAR OFFER
          </span>
          <Sparkles size={10} className="sm:size-3 text-yellow-200" />
        </motion.div>

        {/* 🎆 MAIN OFFER CARD */}
        <div
          className="relative
          rounded-xl sm:rounded-2xl overflow-hidden
          border border-white/30
          shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:shadow-[0_0_40px_rgba(59,130,246,0.4)]
          hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]
          transition-all duration-300"
        >
          {/* 🌌 GRADIENT BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900" />
          
          {/* ✨ ANIMATED GRADIENT OVERLAY */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r
            from-cyan-500/10 via-blue-500/10 to-purple-500/10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity 
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* ✨ Sparkle Pattern */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%),
            radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]" 
          />

          {/* 🎊 Background Confetti */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl pointer-events-none">
            {confetti.map((item) => (
              <motion.div
                key={item.id}
                className="absolute text-sm sm:text-base"
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                initial={{ y: -20, opacity: 0, rotate: 0 }}
                animate={{ 
                  y: [item.y, item.y + 100],
                  opacity: [0, 0.7, 0],
                  rotate: 360,
                  x: [item.x, item.x + (Math.random() * 30 - 15)]
                }}
                transition={{ 
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Left: Offer Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
                  {/* Emoji & Text Row */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* <motion.div
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-3xl sm:text-4xl"
                    >
                      🎆
                    </motion.div> */}
                    
                    <div className="relative">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 leading-tight">
                        {text || " "}
                        <span className="animate-pulse ml-1 text-cyan-200">|</span>
                      </h2>
                      <div className="flex items-center gap-2">
                        <Clock size={10} className="sm:size-3 text-cyan-200" />
                        <p className="text-xs text-white/90 font-medium">
                          Ends: Jan 15, 2026 • Limited Spots Available
                        </p>
                      </div>
                    </div>
                    
                    {/* <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="text-3xl sm:text-4xl"
                    >
                      🎇
                    </motion.div> */}
                  </div>

                  {/* Offer Details */}
                  <div className="w-full max-w-sm mx-auto lg:mx-0">
                    <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 
                    px-3 py-2 rounded-lg border border-cyan-400/30 backdrop-blur-sm">
                      <p className="text-xs sm:text-sm text-white font-medium flex items-center justify-center lg:justify-start gap-1 sm:gap-2">
                        <span className="flex items-center gap-1">
                          <Zap size={10} className="sm:size-3 text-yellow-300" />
                          Special Offer:
                        </span>
                        <span className="ml-1 sm:ml-2 text-yellow-300 font-bold text-sm sm:text-base">
                          Start Your Year with a New Website!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Countdown Timer */}
              <div className="flex-1 w-full max-w-sm">
                <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60
                backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20
                shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                    <Clock size={12} className="sm:size-4 text-yellow-300" />
                    <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider drop-shadow-lg">
                      ⏳ Offer Ends In
                    </h3>
                  </div>
                  
                  {/* Countdown Grid */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
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
                  
                  {/* Progress Bar */}
                  {/* <div className="mt-3 sm:mt-4">
                    <div className="flex justify-between text-xs text-white/90 mb-1 font-medium">
                      <span className="flex items-center gap-1">
                        <Flame size={10} className="sm:size-3 text-yellow-400" />
                        Time Left
                      </span>
                      <span className="text-cyan-300 font-bold">
                        {calculatePercentageRemaining()}%
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-blue-900/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"
                        initial={{ width: "100%" }}
                        animate={{ width: `${calculatePercentageRemaining()}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Quick CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-center"
            >
              <motion.button
                onClick={handleClaimOffer}
                className="px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-cyan-600 hover:to-blue-700
                text-white font-semibold text-sm
                shadow-lg hover:shadow-xl hover:shadow-cyan-500/30
                flex items-center justify-center gap-2 mx-auto
                border border-white/30 hover:border-white/50
                transition-all duration-300 w-full max-w-xs"
                whileHover={{ 
                  scale: 1.02,
                  y: -1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift size={14} className="text-yellow-300" />
                <span>Claim New Year Offer</span>
                <Sparkles size={12} className="text-yellow-300" />
              </motion.button>
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewYearOffer;

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
  const totalDuration = 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds
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
      backgroundColor: ["rgba(59,130,246,0.4)", "rgba(6,182,212,0.6)", "rgba(59,130,246,0.4)"]
    } : {}}
    transition={{ duration: 0.8, repeat: isUrgent ? Infinity : 0 }}
    className={`
      ${isUrgent 
        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.4)]' 
        : 'bg-gradient-to-br from-blue-800/40 to-indigo-800/30 border-white/20'
      }
      border rounded-lg sm:rounded-xl p-2 text-center
      backdrop-blur-sm
    `}
  >
    <p className={`${isMobile ? 'text-xl sm:text-2xl' : 'text-2xl'} font-bold ${isUrgent ? 'text-yellow-200' : 'text-white'} drop-shadow-lg`}>
      {value}
    </p>
    <p className="text-[10px] sm:text-xs uppercase tracking-wider mt-0.5 sm:mt-1 text-white/80 font-medium">
      {label}
    </p>
  </motion.div>
);