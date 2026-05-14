import { motion } from "motion/react";

const logos = [
  "Web Developer", "Video Editing", "Commercial Website", "AI Creative", "Hard Problem Solving"
];

export default function LogoSlider() {
  return (
    <div className="bg-transparent py-12 border-y border-white/5 overflow-hidden" id="logo-slider">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-24 whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-display font-black text-white/20 tracking-tighter"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
