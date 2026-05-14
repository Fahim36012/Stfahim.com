import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Credentials", path: "/#resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between"
      id="navbar"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center w-full" id="nav-wrapper">
        <div className="flex items-center" id="nav-logo-container">
          <NavLink to="/" className="text-xl font-black tracking-tighter text-white group relative overflow-hidden px-4 py-2 rounded-lg" id="nav-logo">
            <span className="relative z-10">FAHIM<span className="text-accent">.</span></span>
            {/* Subtle Liquid Glass Effect */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none z-0"
              animate={{
                x: ["100%", "-100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "linear",
              }}
            />
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-1" id="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 relative group overflow-hidden rounded-full ${
                  isActive ? "text-accent bg-accent/5 shadow-[0_0_20px_rgba(0,255,65,0.05)]" : "text-white/40 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
              id={`nav-item-${item.name.toLowerCase()}`}
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 block">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4">
          <motion.a 
            href="/cv.pdf"
            download="Shahriar_Talukder_Fahim_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex px-6 py-3.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
          >
            CV
          </motion.a>
          <motion.a 
            href="https://wa.me/8801631522931" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.02 },
              tap: { scale: 0.98 }
            }}
            className="hidden sm:flex group relative items-center gap-2 px-8 py-3.5 rounded-full border border-accent text-[10px] uppercase tracking-widest font-bold text-accent transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">WHATSAPP ME</span>
          </motion.a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left z-50 shadow-[0_0_10px_rgba(0,255,65,0.5)]"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto", 
              scaleY: 1,
              transition: {
                height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3, delay: 0.1 },
                scaleY: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0, 
              scaleY: 0,
              transition: {
                height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2 },
                scaleY: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            style={{ originY: 0 }}
            className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-4 pt-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0, filter: "blur(10px)" }}
                  animate={{ 
                    x: 0, 
                    opacity: 1, 
                    filter: "blur(0px)",
                    transition: {
                      delay: 0.2 + (i * 0.08),
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  exit={{ 
                    x: 30, 
                    opacity: 0, 
                    filter: "blur(5px)",
                    transition: {
                      delay: i * 0.03,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `w-full text-left p-4 text-xs uppercase tracking-[0.4em] font-black transition-all duration-500 flex items-center justify-between group rounded-2xl border ${
                        isActive ? "text-accent border-accent/20 bg-accent/5" : "text-white/30 border-transparent hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>
                        <motion.span 
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          className="w-12 h-[2px] bg-accent origin-right transition-transform" 
                        />
                        {isActive && (
                          <motion.div 
                            layoutId="mobile-nav-indicator"
                            className="w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(0,255,65,0.8)]"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.8, duration: 0.5 }
                }}
                exit={{ opacity: 0, y: 10 }}
                className="pt-10 mt-4 border-t border-white/5 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-widest text-white/30 font-black">Get in touch</span>
                  <a href="https://wa.me/8801631522931" className="text-xl font-black text-white hover:text-accent transition-colors">01631522931</a>
                </div>
                <motion.a 
                  href="https://wa.me/8801631522931" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-accent text-black text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 overflow-hidden text-center shadow-[0_10px_30px_rgba(0,255,65,0.2)]"
                >
                  <span className="relative z-10">WHATSAPP ME</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
