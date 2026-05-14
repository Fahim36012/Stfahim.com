import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    mouseX.set(mouseXPos / width - 0.5);
    mouseY.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full"
      >
        {children}
      </div>
      
      {/* Liquid Glass Highlight & Movement Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl overflow-hidden"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) => `radial-gradient(circle at ${(mx as number + 0.5) * 100}% ${(my as number + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 80%)`
          ),
        }}
      >
        {/* Animated Liquid Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -20, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [30, -30]),
            y: useTransform(mouseY, [-0.5, 0.5], [30, -30]),
          }}
          className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-accent/5 blur-[80px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]),
            y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/5 blur-[100px] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
