import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Heart, Flower2, Zap, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HackerText = ({ text, duration = 5, color = "#00ff41" }: { text: string; duration?: number; color?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>[]{}";
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isAnimating, setIsAnimating] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      const totalSteps = text.length * 2;
      const intervalTime = (duration * 1000) / totalSteps;

      const interval = setInterval(() => {
        setIteration((prev) => {
          const next = prev + 0.5;
          setDisplayText(
            text
              .split("")
              .map((char, index) => {
                if (index < next) return text[index];
                if (char === " ") return " ";
                return letters[Math.floor(Math.random() * letters.length)];
              })
              .join("")
          );
          if (next >= text.length) {
            clearInterval(interval);
          }
          return next;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isInView, text, duration, isAnimating]);

  return (
    <span ref={containerRef} className="font-mono inline-block text-left" style={{ color: isAnimating ? color : "transparent" }}>
      {displayText}
      {isAnimating && iteration < text.length && (
        <motion.span 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="ml-1 inline-block bg-[#00ff41] w-2 h-5 align-middle"
        />
      )}
    </span>
  );
};

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const combinedText = "I am a Computer Science and Engineering enthusiast with hands-on experience in web development and programming. I work with modern web technologies including HTML, CSS, JavaScript, and backend languages to build responsive and user-friendly websites. I have completed several academic and personal projects, focusing on problem-solving, clean design, and efficient performance.";
  const passionText = "I enjoy turning ideas into functional digital solutions. In addition to programming, I am passionate about travel vlogging and professional video editing. I create engaging content with smooth transitions, storytelling, and high-quality visuals.";
  const valueText = "I am dedicated, detail-oriented, and always eager to learn and take on new challenges.";
  
  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 md:px-12 bg-transparent overflow-hidden relative" 
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 relative z-10 w-full">
          <motion.h2 
            style={{ y: yHeader, opacity: opacityHeader }}
            className="text-8xl md:text-[14vw] font-black tracking-tighter mb-8 leading-tight outline-text"
            id="about-title"
          >
            ABOUT ME
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="p-8 md:p-12 border border-[#00ff41]/20 bg-black/40 rounded-3xl backdrop-blur-xl text-left shadow-2xl shadow-black/50 relative overflow-hidden group">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/5 to-transparent h-[10%] w-full animate-scanline pointer-events-none opacity-20" />
              <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#00ff41]" />
                  <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#00ff41]">SYSTEM SUMMARY</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["CSE", "WEB", "DEV", "VFX"].map((tag) => (
                    <span key={tag} className="text-[8px] font-bold tracking-widest px-3 py-1 bg-[#00ff41]/5 text-[#00ff41]/40 border border-[#00ff41]/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="text-xl md:text-2xl font-bold leading-relaxed text-white/90 font-mono">
                    <HackerText text={combinedText} duration={6} />
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 space-y-8">
                  <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed">
                    {passionText}
                  </p>
                  <div className="bg-[#00ff41]/5 p-8 rounded-2xl border border-[#00ff41]/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-30" />
                    <p className="text-[#00ff41] text-lg md:text-2xl font-black uppercase tracking-[0.15em] leading-tight text-center">
                      <HackerText text={valueText} duration={4} color="#00ff41" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-white/20 text-xs md:text-sm font-bold uppercase tracking-[1em] mt-12 animate-pulse">
              EVOLVING EVERY DAY
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.a 
                href="https://wa.me/8801631522931" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="btn-primary neon-glow inline-block"
              >
                WHATSAPP ME
              </motion.a>
              <motion.a 
                href="/cv.pdf" 
                download="Shahriar_Talukder_Fahim_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                whileTap="tap"
                variants={{
                  hover: { scale: 1.02 },
                  tap: { scale: 0.98 }
                }}
                className="group relative flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-[10px] uppercase tracking-widest font-bold text-white transition-all duration-500 overflow-hidden"
              >
                {/* Background sliding effect */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                
                <div className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                  <motion.div
                    variants={{
                      hover: { y: [0, -3, 0], transition: { repeat: Infinity, duration: 1 } }
                    }}
                  >
                    <Download size={16} />
                  </motion.div>
                  <span>DOWNLOAD CV</span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Floating Icons from video */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-accent opacity-40 hidden md:block"
        >
          <Heart size={80} fill="currentColor" />
        </motion.div>
        <motion.div
           animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] text-accent opacity-40 hidden md:block"
        >
          <Flower2 size={100} />
        </motion.div>
        <motion.div
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] text-blue-500/30 hidden md:block"
        >
          <Zap size={60} fill="currentColor" />
        </motion.div>
      </div>
    </section>
  );
}
