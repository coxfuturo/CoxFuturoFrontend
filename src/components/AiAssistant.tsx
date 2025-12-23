"use client";

import React, { useState, useEffect, useRef, ReactElement } from "react";
import { MessageCircle, X, Send, Bot, Info,User, Home,ChevronRight, Smartphone, Globe, Search, Zap, Phone, Mail, MessageSquare, FileText, Volume2, VolumeX, Sparkles, HelpCircle, Briefcase, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
const [messages, setMessages] = useState([
  {
    id: 1,
    text: (
      <>
        👋 Hello! Welcome to <strong>CoxFuture Technologies</strong>.  
        I'm your AI assistant.
      </>
    ),
    sender: "bot" as const
  },
  {
    id: 2,
    text: (
      <>
        How can I assist you today? Try saying{" "}
        <strong>hi</strong>, <strong>services</strong>,{" "}
        <strong>contact</strong>, or <strong>help</strong>.
      </>
    ),
    sender: "bot" as const
  }
]);

  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Enhanced purple color palette
  const purpleColors = {
    primary: "#7C3AED",
    secondary: "#8B5CF6",
    accent: "#A78BFA",
    dark: "#6D28D9",
    light: "#EDE9FE",
    gradientFrom: "#8B5CF6",
    gradientTo: "#7C3AED"
  };

  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Initialize AudioContext on user gesture
  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Resume if suspended (required by browsers)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  };

  // Sound effects - fixed to work with user gesture requirement
  const playSound = (type: 'messageSent' | 'notification' | 'click') => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = getAudioContext();
      
      if (type === 'messageSent') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(750, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(650, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
      }
      
      if (type === 'notification') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
      }
      
      if (type === 'click') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(550, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(350, audioContext.currentTime + 0.05);
        
        gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
      }
    } catch (error) {
      console.log("Audio error:", error);
      // Silently fail if audio isn't available
    }
  };

  // Safe navigation function
  const safeNavigate = (path: string) => {
    if (typeof window !== 'undefined') {
      // If using Next.js App Router
      if ((window as any).next && (window as any).next.router) {
        (window as any).next.router.push(path);
      }
      // Fallback to regular navigation
      else {
        window.location.href = path;
      }
    }
  };

  // Common command processor
  const processCommonCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    if (cmd.includes('hi') || cmd.includes('hello') || cmd.includes('hey')) {
      return {
        response: "👋 Hello there! Welcome to CoxFuture Technologies. I'm excited to help you today!",
        action: 'greeting' as const
      };
    }
    
    if (cmd.includes('services') || cmd.includes('what do you offer') || cmd.includes('offerings')) {
      return {
        response: "🎯 Here are our premium services. Please select one to learn more:",
        action: 'showServices' as const
      };
    }
    
    if (cmd.includes('contact') || cmd.includes('support') || cmd.includes('help')) {
      return {
        response: "📞 Need to reach us? Here are all our contact options:",
        action: 'showContact' as const
      };
    }
    
    if (cmd.includes('about') || cmd.includes('company') || cmd.includes('CoxFuture')) {
      return {
        response: "🌟 **CoxFuture Softwares** is a premier software development company specializing in mobile apps, websites, custom software, and digital solutions. We transform ideas into reality!",
        action: 'info' as const
      };
    }
    
    if (cmd.includes('pricing') || cmd.includes('cost') || cmd.includes('quote')) {
      return {
        response: "💎 For detailed pricing and custom quotes, I recommend you visit our **Contact** page or request a callback. Each project is unique and priced accordingly!",
        action: 'quote' as const
      };
    }
    
    if (cmd.includes('portfolio') || cmd.includes('work') || cmd.includes('projects')) {
      return {
        response: "🎨 Want to see our amazing work? Let me take you to our portfolio section!",
        action: () => safeNavigate('/portfolio')
      };
    }
    
    if (cmd.includes('thank') || cmd.includes('thanks')|| cmd.includes('thank you')) {
      return {
        response: "🙏 You're welcome! It's my pleasure to assist you. Feel free to ask anything else!",
        action: 'thanks' as const
      };
    }
    
    if (cmd.includes('bye') ||cmd.includes('by') || cmd.includes('goodbye') || cmd.includes('exit')) {
      return {
        response: "👋 Goodbye! Have a wonderful day. Remember, I'm always here when you need assistance!",
        action: 'bye' as const
      };
    }
    
    if (cmd.includes('home') || cmd.includes('main') || cmd.includes('start')) {
      return {
        response: "🏠 Taking you back to the home page!",
        action: () => safeNavigate('/')
      };
    }
    
    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
      // Don't play sound automatically - wait for user gesture
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullscreen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { icon: <Smartphone size={isMobile ? 16 : 18} />, label: " Mobile App Development", route: "/services/mobile-app" },
    { icon: <Globe size={isMobile ? 16 : 18} />, label: " Website Development", route: "/services/website-development" },
    { icon: <Search size={isMobile ? 16 : 18} />, label: " SEO Services", route: "/services/seo" },
    // { icon: <Zap size={isMobile ? 16 : 18} />, label: "Custom Software", route: "/services/custom-software" },
    // { icon: <Briefcase size={isMobile ? 16 : 18} />, label: " Enterprise Solutions", route: "/services/enterprise" }
  ];

  const contactOptions = [
    { icon: <Phone size={isMobile ? 16 : 18} />, label: " Call Support", subtitle: "+91 92177 90770", action: () => window.open("tel:+919217790770") },
    { icon: <MessageSquare size={isMobile ? 16 : 18} />, label: " WhatsApp Chat", subtitle: "Instant response", action: () => window.open("https://wa.me/919217790770") },
    { icon: <Mail size={isMobile ? 16 : 18} />, label: " Send Email", subtitle: "info@CoxFuture.com", action: () => window.open("mailto:info@CoxFuture.com") },
    // { icon: <FileText size={isMobile ? 16 : 18} />, label: " Get Quote", subtitle: "Custom pricing", action: () => safeNavigate("/contact") }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    playSound('messageSent');
    
    const userMessage = { id: Date.now(), text: inputMessage, sender: "user" as const };
    setMessages(prev => [...prev, userMessage]);
    
    const command = processCommonCommand(inputMessage);
    setInputMessage("");
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(() => {
      if (command) {
        const botMessage = { id: Date.now() + 1, text: command.response, sender: "bot" as const };
        setMessages(prev => [...prev, botMessage]);
        
        if (command.action === 'showServices' || command.action === 'showContact') {
          setTimeout(() => {
            setShowOptions(true);
          }, 500);
        } else if (typeof command.action === 'function') {
          setTimeout(() => command.action(), 800);
        }
      } else {
        const botResponses = [
          "🤔 Let me help you with that! Here are some options:",
          "💡 Great question! Here's how I can assist you:",
          "🎯 Based on your query, here are relevant options:",
          "✨ Perfect! Let me show you what we offer:"
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botMessage = { id: Date.now() + 1, text: randomResponse, sender: "bot" as const };
        setMessages(prev => [...prev, botMessage]);
        setShowOptions(true);
      }
      
      setIsTyping(false);
      playSound('notification');
    }, 800);
  };

  const handleOptionClick = (action: () => void, label: string) => {
    playSound('click');
    
    const optionMessage = { id: Date.now(), text: `👉 ${label}`, sender: "user" as const };
    setMessages(prev => [...prev, optionMessage]);
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(() => {
      const confirmationMessages = [
        "✅ Excellent choice! Redirecting you now...",
        "🚀 Perfect! Taking you there...",
        "💫 Great selection! Loading details...",
        "🌟 Awesome! Opening that for you..."
      ];
      const botMessage = { 
        id: Date.now() + 1, 
        text: confirmationMessages[Math.floor(Math.random() * confirmationMessages.length)], 
        sender: "bot" as const
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      playSound('notification');
      
      if (action) setTimeout(() => action(), 600);
    }, 700);
  };

  const handleContactOption = (action: () => void, label: string) => {
    playSound('click');
    
    const optionMessage = { id: Date.now(), text: `📞 ${label}`, sender: "user" as const };
    setMessages(prev => [...prev, optionMessage]);
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Connecting you with our team...",
        "Opening contact option...",
        "Redirecting you now...",
        "Taking you to the next step..."
      ];
      const botMessage = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: "bot" as const
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      playSound('notification');
      
      if (action) setTimeout(() => action(), 500);
    }, 600);
  };

  interface MessageBubbleProps {
    message: {
      id: number;
      text: string;
      sender: 'user' | 'bot';
    };
  }

  const MessageBubble = ({ message }: MessageBubbleProps) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} rounded-full flex items-center justify-center flex-shrink-0 mt-1
            ${message.sender === 'bot' 
              ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg' 
              : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md'
            }`}
        >
          {message.sender === 'bot' ? <Bot size={isMobile ? 14 : 16} /> : <User size={isMobile ? 14 : 16} />}
        </motion.div>
        <div className={`${isMobile ? 'px-3 py-2 rounded-xl' : 'px-4 py-3 rounded-2xl'} shadow-sm ${message.sender === 'bot' 
          ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200' 
          : 'bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-tr-none shadow-md'
        }`}>
          <p className={`${isMobile ? 'text-xs' : 'text-sm'}`}>{message.text}</p>
          <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} mt-1 opacity-60`}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </motion.div>
  );

  interface ServiceButtonProps {
    icon: ReactElement;
    label: string;
    onClick: () => void;
  }

  const ServiceButton = ({ icon, label, onClick }: ServiceButtonProps) => (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl text-xs md:text-sm 
        bg-white hover:bg-purple-50 text-gray-800 border border-gray-200 
        transition-all hover:border-purple-300 hover:shadow-md group w-full"
    >
      <div className="text-purple-600 group-hover:text-purple-500 transition p-1.5 md:p-2 bg-purple-50 rounded-lg">
        {icon}
      </div>
      <span className="flex-1 text-left font-medium truncate">{isMobile ? label.split(' ')[0] + '...' : label}</span>
      <ChevronRight size={isMobile ? 12 : 14} className="text-gray-400 group-hover:text-purple-500 transition flex-shrink-0" />
    </motion.button>
  );

  interface ContactButtonProps {
    icon: ReactElement;
    label: string;
    subtitle: string;
    onClick: () => void;
    colorClass: string;
    iconColor: string;
  }

  const ContactButton = ({ icon, label, subtitle, onClick, colorClass, iconColor }: ContactButtonProps) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 rounded-xl text-xs md:text-sm 
        bg-white hover:bg-purple-50 text-gray-800 border border-gray-200 
        transition-all hover:border-purple-300 group w-full"
    >
      <div className="flex items-center gap-2 md:gap-3">
        <div className={`p-1.5 md:p-2 rounded-lg ${colorClass}`}>
          {React.cloneElement(icon, { className: iconColor })}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-left truncate">{label}</p>
          <p className="text-[10px] md:text-xs text-gray-600 truncate">{subtitle}</p>
        </div>
      </div>
      <ChevronRight size={isMobile ? 12 : 14} className="text-gray-400 group-hover:text-purple-500 transition flex-shrink-0 ml-1" />
    </motion.button>
  );

  // Quick commands suggestions
const quickCommands = [
  { text: "Services", icon: <Briefcase size={16} /> },
  { text: "Contact", icon: <Phone size={16} /> },
  { text: "About", icon: <Info size={16} /> },
  { text: "Quote", icon: <FileText size={16} /> },
  { text: "Home", icon: <Home size={16} /> }
];

  const handleQuickCommand = (command: string) => {
    setInputMessage(command);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputMessage.trim()) {
      handleSendMessage();
    }
  };

  const handleFloatingButtonClick = () => {
    // Initialize audio context on first user interaction
    getAudioContext();
    setOpen(true);
    playSound('click');
  };

  // Calculate responsive dimensions
  const getChatWindowDimensions = () => {
    if (isMobile) {
      if (isFullscreen) {
        return {
          width: '100vw',
          height: '100vh',
          bottom: 0,
          right: 0,
          borderRadius: '0'
        };
      }
      return {
        width: 'calc(100vw - 2rem)',
        height: '500px',
        bottom: '1rem',
        right: '1rem',
        borderRadius: '1rem'
      };
    }
    return {
      width: '400px',
      height: '600px',
      bottom: '1.5rem',
      right: '1.5rem',
      borderRadius: '0.75rem'
    };
  };

  const chatWindowStyle = getChatWindowDimensions();

  return (
    <>
      {/* Floating Button with enhanced purple theme - Mobile responsive */}
      {showBubble && !open && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={handleFloatingButtonClick}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50
          bg-gradient-to-r from-purple-600 to-purple-700 text-white
          p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl 
          transition-all duration-200 group shadow-purple-500/30"
          style={{
            background: `linear-gradient(135deg, ${purpleColors.primary}, ${purpleColors.dark})`
          }}
        >
          {/* <Sparkles size={isMobile ? 18 : 20} className="text-white" /> */}
          <MessageCircle size={isMobile ? 18 : 20} className="text-white" />
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Tooltip for desktop */}
          {!isMobile && (
            <span className="absolute right-14 -top-2 w-max px-3 py-1 
              bg-white text-purple-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 
              transition-all duration-300 pointer-events-none border border-purple-200 shadow-lg shadow-purple-200/50">
              Need help? 👋
            </span>
          )}
        </motion.button>
      )}

      {/* Chat Window with purple theme - Mobile responsive */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed z-50
            bg-gradient-to-b from-gray-50 to-white text-gray-800
            shadow-2xl shadow-purple-500/20
            border border-purple-100
            flex flex-col overflow-hidden"
            style={{
              width: chatWindowStyle.width,
              height: chatWindowStyle.height,
              bottom: chatWindowStyle.bottom,
              right: chatWindowStyle.right,
              borderRadius: chatWindowStyle.borderRadius
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 md:px-5 py-3 md:py-4
              bg-gradient-to-r from-white to-gray-50
              border-b border-purple-100 shadow-sm">
              <div className="flex items-center gap-2 md:gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  className="relative"
                >
                  <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30`}
                    style={{
                      background: `linear-gradient(135deg, ${purpleColors.gradientFrom}, ${purpleColors.gradientTo})`
                    }}>
                    <Bot size={isMobile ? 16 : 20} className="text-white" />
                    {!isMobile && <Sparkles size={10} className="text-white absolute -top-1 -right-1" />}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-gray-800 flex items-center gap-1 md:gap-2 truncate`}>
                    CoxFuture AI Assistant 
                    <span className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                      PRO
                    </span>
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-600 truncate">Online • Ready to assist</p>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                {isMobile && (
                  <button 
                    onClick={() => {
                      setIsFullscreen(!isFullscreen);
                      playSound('click');
                    }}
                    className="p-1.5 md:p-2 hover:bg-purple-50 rounded-lg transition text-gray-600 hover:text-purple-700"
                    title={isFullscreen ? "Minimize" : "Fullscreen"}
                  >
                    {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  </button>
                )}
                <button 
                  onClick={() => {
                    setSoundEnabled(!soundEnabled);
                    playSound('click');
                  }}
                  className="p-1.5 md:p-2 hover:bg-purple-50 rounded-lg transition text-gray-600 hover:text-purple-700"
                  title={soundEnabled ? "Mute sounds" : "Unmute sounds"}
                >
                  {soundEnabled ? <Volume2 size={isMobile ? 14 : 16} /> : <VolumeX size={isMobile ? 14 : 16} />}
                </button>
                <button 
                  onClick={() => {
                    setOpen(false);
                    playSound('click');
                  }}
                  className="p-1.5 md:p-2 hover:bg-purple-50 rounded-lg transition text-gray-600 hover:text-purple-700"
                >
                  <X size={isMobile ? 16 : 18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-2 md:p-4 space-y-3 md:space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50/30 to-white">
              {/* Welcome message - Only show on mobile if not fullscreen */}
              {(!isMobile || !isFullscreen) && (
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-2 md:p-3 mb-2 md:mb-4">
                  <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-purple-800 font-medium`}>
                    💡 <strong>Pro Tip:</strong> Try saying 
                    <span className="bg-white px-1 py-0.5 md:px-2 md:py-1 rounded mx-1 text-purple-700">"services"</span>, 
                    <span className="bg-white px-1 py-0.5 md:px-2 md:py-1 rounded mx-1 text-purple-700">"contact"</span>, or 
                    <span className="bg-white px-1 py-0.5 md:px-2 md:py-1 rounded mx-1 text-purple-700">"hi"</span>
                  </p>
                </div>
              )}

              {/* Messages */}
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Quick Command Suggestions */}
              {!showOptions && !isTyping && messages.length <= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1 md:space-y-2"
                >
                  <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-gray-500 font-medium`}>Try these commands:</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {quickCommands.map((cmd, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickCommand(cmd.text)}
                        className={`${isMobile ? 'px-2 py-1 text-[10px]' : 'px-3 py-2 text-xs'} 
                          bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors`}
                      >
                        {cmd.icon} {isMobile && idx < 3 ? cmd.text.slice(0, 3) + '...' : cmd.text}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <div className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
                    style={{
                      background: `linear-gradient(135deg, ${purpleColors.gradientFrom}, ${purpleColors.gradientTo})`
                    }}>
                    <Bot size={isMobile ? 14 : 16} className="text-white" />
                  </div>
                  <div className={`${isMobile ? 'px-3 py-2' : 'px-4 py-3'} bg-white rounded-2xl rounded-tl-none border border-purple-100 shadow-sm`}>
                    <div className="flex gap-1">
                      <motion.div
                        className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full`}
                        style={{ backgroundColor: purpleColors.accent }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full`}
                        style={{ backgroundColor: purpleColors.accent }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full`}
                        style={{ backgroundColor: purpleColors.accent }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Service Options */}
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Services Section */}
                  <div>
                    <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                      <div className="p-1 md:p-1.5 rounded-lg bg-purple-100">
                        <Briefcase size={isMobile ? 12 : 14} className="text-purple-600" />
                      </div>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-purple-700 uppercase tracking-wider`}>
                        Our Premium Services
                      </p>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ServiceButton
                            icon={service.icon}
                            label={service.label}
                            onClick={() => handleOptionClick(() => safeNavigate(service.route), service.label)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div>
                    <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                      <div className="p-1 md:p-1.5 rounded-lg bg-purple-100">
                        <MessageSquare size={isMobile ? 12 : 14} className="text-purple-600" />
                      </div>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-purple-700 uppercase tracking-wider`}>
                        Contact Options
                      </p>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {contactOptions.map((contact, index) => (
                        <motion.div
                          key={contact.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <ContactButton
                            icon={contact.icon}
                            label={contact.label}
                            subtitle={contact.subtitle}
                            onClick={() => handleContactOption(contact.action, contact.label)}
                            colorClass="bg-purple-50"
                            iconColor="text-purple-600"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-2 md:p-4 border-t border-purple-100 bg-white">
              <div className="flex gap-1 md:gap-2 mb-2 md:mb-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 ${isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} 
                    bg-white border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 
                    ${isMobile ? 'focus:ring-1' : 'focus:ring-2'} focus:ring-purple-100
                    placeholder:text-gray-500 shadow-sm`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className={`${isMobile ? 'px-3 py-2' : 'px-4 py-3'} text-white rounded-lg transition flex items-center gap-1 md:gap-2 
                    disabled:cursor-not-allowed shadow-lg shadow-purple-500/30`}
                  style={{
                    background: inputMessage.trim() 
                      ? `linear-gradient(135deg, ${purpleColors.gradientFrom}, ${purpleColors.gradientTo})`
                      : '#D1D5DB'
                  }}
                >
                  <Send size={isMobile ? 14 : 16} />
                </motion.button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <HelpCircle size={isMobile ? 12 : 14} className="text-gray-400" />
                  <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-gray-500`}>
                    Try: <span className="text-purple-600 font-medium">"hi"</span>,{" "}
                    <span className="text-purple-600 font-medium">"services"</span>,{" "}
                    <span className="text-purple-600 font-medium">"contact"</span>
                  </p>
                </div>
                <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-gray-500`}>
                  Press <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded">⏎ Enter</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;