import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black shadow-lg shadow-accent/20 hover:scale-110 active:scale-95 transition-transform neon-glow"
      aria-label="Scroll to top"
    >
      <motion.div
        animate={isVisible ? {
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-accent -z-10"
      />
      <ChevronUp size={24} strokeWidth={3} />
    </motion.button>
  );
}
