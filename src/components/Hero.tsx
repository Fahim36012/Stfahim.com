import { motion, useScroll, useTransform } from "motion/react";
import portraitImg from "../assets/images/regenerated_image_1778181275839.jpg";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotatePortrait = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scalePortrait = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center pt-20" 
      id="hero"
    >
      <div className="z-20">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
              }
            }
          }}
          className="text-[12vw] md:text-[10vw] font-black leading-[0.9] mb-8 tracking-tighter flex justify-center text-white mix-blend-difference whitespace-nowrap overflow-hidden py-4" 
          id="hero-title"
        >
          {"HI, I'M FAHIM".split("").map((char, index) => (
            <motion.span 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" },
                visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`inline-block relative px-1 ${char === " " ? "mr-[0.3em]" : ""}`}
            >
              <span className="relative z-10">{char}</span>
              
              {/* Liquid Refraction Layer 1: Moving Highlight */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-[-40deg] pointer-events-none z-20"
                animate={{
                  x: ["-100%", "200%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 1 + (index * 0.2),
                  ease: "easeInOut",
                }}
              />

              {/* Liquid Refraction Layer 2: Color Shift Blur */}
              <motion.span 
                className="absolute inset-0 bg-accent/10 blur-xl pointer-events-none z-0 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              />

              {/* Liquid Refraction Layer 3: Glass Edge Reflection */}
              <motion.span 
                className="absolute top-0 left-0 w-full h-[2px] bg-white/30 blur-[1px] pointer-events-none z-20"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
              />
            </motion.span>
          ))}
        </motion.h1>
        
        <div className="max-w-xl mx-auto mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/90 text-lg md:text-xl uppercase tracking-widest font-bold px-4"
          >
            CSE ENTHUSIAST & WEB DEVELOPER<br />TURNING IDEAS INTO FUNCTIONAL<br />DIGITAL SOLUTIONS 🚀
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.a 
              href="/cv.pdf" 
              download="Shahriar_Talukder_Fahim_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-accent text-black font-black uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(0,255,65,0.3)] hover:shadow-[0_25px_60px_rgba(0,255,65,0.5)] transition-all duration-500 group"
            >
              Download CV
            </motion.a>
            <a 
              href="#portfolio"
              className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 backdrop-blur-xl"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Central Portrait */}
      <motion.div
        style={{ y: yPortrait, rotate: rotatePortrait, scale: scalePortrait }}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] max-w-[500px] max-h-[500px] cursor-pointer group/portrait z-10"
        id="hero-portrait"
      >
        <div className="absolute inset-0 bg-accent blur-[120px] opacity-40 rounded-full" />
        <div className="w-full h-full rounded-[60px] group-hover/portrait:rounded-[100px] overflow-hidden glass-card p-2 relative z-10 group transition-all duration-700">
          <img 
            src={portraitImg} 
            alt="Fahim Portrait"
            className="w-full h-full object-cover rounded-[50px] group-hover/portrait:rounded-[90px] transition-all duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Button like in video */}
        <a
          href="https://wa.me/8801631522931"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 w-36 h-36 md:w-56 md:h-56 bg-accent rounded-full flex items-center justify-center text-black font-black text-sm md:text-lg uppercase tracking-widest text-center px-6 leading-tight shadow-2xl shadow-accent/40 hover:scale-110 hover:shadow-[0_0_60px_rgba(0,255,65,0.6)] active:scale-95 transition-all z-20 neon-glow group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">WHATSAPP ME</span>
        </a>
      </motion.div>

      {/* Background Orbs with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] bg-accent/20 blur-[120px] rounded-full -z-10 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-accent/20 blur-[150px] rounded-full -z-10" 
      />
    </section>
  );
}
