import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function SpaceBackground() {
  const { scrollYProgress } = useScroll();

  // 1. Deep Galaxy (0% - 20%)
  const galaxyScale = useTransform(scrollYProgress, [0, 0.4], [1, 2]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);

  // 2. Saturn (20% - 40%)
  const saturnY = useTransform(scrollYProgress, [0.05, 0.25, 0.45], ["100vh", "0vh", "-100vh"]);
  const saturnScale = useTransform(scrollYProgress, [0.05, 0.25, 0.45], [0.5, 1.2, 2]);
  const saturnOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]);

  // 3. Mars (40% - 60%)
  const marsY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["100vh", "0vh", "-100vh"]);
  const marsScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.5, 1, 1.8]);
  const marsOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);

  // 4. Earth (60% - 85%)
  const earthY = useTransform(scrollYProgress, [0.55, 0.75, 0.95], ["100vh", "0vh", "-100vh"]);
  const earthScale = useTransform(scrollYProgress, [0.55, 0.75, 0.95], [0.4, 1.1, 2.5]);
  const earthOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 1, 0]);

  // 5. Moon & Orbit Zoom Out (80% - 100%)
  // Journey from Earth close-up past the moon to a wide orbit
  const moonY = useTransform(scrollYProgress, [0.75, 0.85, 0.95], ["80vh", "0vh", "-50vh"]);
  const moonScale = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0.2, 0.8, 1.5]);
  const moonOpacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);

  // Finalwide orbit zoom out (Earth appears small again in distance)
  const finalOrbitScale = useTransform(scrollYProgress, [0.9, 1], [1, 0.5]);
  const finalOrbitOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 0.6]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020205] select-none pointer-events-none">
      {/* 🌌 Galaxy Layer */}
      <motion.div style={{ scale: galaxyScale, opacity: galaxyOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464802686167-b939a67e06a1?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </motion.div>

      {/* ✨ Stars (Parallax) */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
        className="absolute inset-0"
      >
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`
            } as any}
          />
        ))}
      </motion.div>

      {/* 🪐 SATURN (Liquid Glass Style) */}
      <motion.div
        style={{ y: saturnY, scale: saturnScale, opacity: saturnOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[30vh] h-[30vh] md:w-[45vh] md:h-[45vh]">
          {/* Planet Body */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#e2c699_0%,_#8b7d60_50%,_#1a1712_100%)] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),_0_0_60px_rgba(226,198,153,0.2)]" />
          {/* Glass Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[30%] border-[20px] border-white/10 rounded-[100%] rotate-[-15deg] backdrop-blur-[2px] shadow-[0_0_40px_rgba(255,255,255,0.05),_inset_0_0_20px_rgba(255,255,255,0.1)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[20%] border-[8px] border-white/5 rounded-[100%] rotate-[-15deg]" />
        </div>
      </motion.div>

      {/* 🔴 MARS */}
      <motion.div
        style={{ y: marsY, scale: marsScale, opacity: marsOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[25vh] h-[25vh] md:w-[40vh] md:h-[40vh]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ff6b6b_0%,_#8b0000_60%,_#2e0000_100%)] shadow-[inset_-15px_-15px_40px_rgba(0,0,0,0.9),_0_0_80px_rgba(255,107,107,0.15)]" />
          {/* Liquid atmosphere layer */}
          <div className="absolute inset-[-10%] rounded-full bg-red-500/10 blur-2xl animate-pulse" />
        </div>
      </motion.div>

      {/* 🌎 EARTH */}
      <motion.div
        style={{ y: earthY, scale: earthScale, opacity: earthOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[35vh] h-[35vh] md:w-[55vh] md:h-[55vh]">
          {/* Liquid Glow Underneath */}
          <div className="absolute inset-[-15%] rounded-full bg-blue-500/20 blur-[80px]" />
          {/* Earth Body */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_30%,_#4299e1_0%,_#3182ce_20%,_#2f855a_40%,_#276749_60%,_#000_100%)] shadow-[inset_-25px_-25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
             {/* Swirling atmosphere effect using glass-white clouds */}
             <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-dark.png')] rotate-12" />
          </div>
          {/* High-Reflect Glass Atmosphere */}
          <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-[1px] bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </motion.div>

      {/* 🌕 MOON */}
      <motion.div
        style={{ y: moonY, scale: moonScale, opacity: moonOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[20vh] h-[20vh] md:w-[35vh] md:h-[35vh]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_40%_40%,_#e2e2e2_0%,_#8c8c8c_50%,_#1a1a1a_100%)] shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.8),_0_0_40px_rgba(255,255,255,0.1)] overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,_transparent_0%,_black_100%)]" />
            {/* Crater shadows */}
            <div className="absolute top-[20%] left-[30%] w-8 h-8 rounded-full bg-black/20 blur-[2px]" />
            <div className="absolute top-[60%] left-[50%] w-12 h-10 rounded-full bg-black/25 blur-[3px]" />
          </div>
        </div>
      </motion.div>

      {/* 🌌 Earth's Orbit Vignette (Contact Final State) */}
      <motion.div
        style={{ scale: finalOrbitScale, opacity: finalOrbitOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_#000_100%)] pointer-events-none"
      />
    </div>
  );
}

