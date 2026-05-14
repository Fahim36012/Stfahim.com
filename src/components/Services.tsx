import { motion } from "motion/react";
import TiltCard from "./TiltCard";

const services = [
  { id: "01", title: "WEB DEVELOPMENT", desc: "Building responsive, modern, and high-performance websites using the latest technologies." },
  { id: "02", title: "VIDEO EDITING", desc: "Professional post-production with smooth transitions, storytelling, and high-quality visuals." },
  { id: "03", title: "COMMERCIAL WEBSITES", desc: "Creating functional digital solutions tailored for business growth and efficient performance." },
  { id: "04", title: "AI CREATIVE", desc: "Leveraging cutting-edge AI tools to enhance digital workflows and creative possibilities." },
  { id: "05", title: "PROBLEM SOLVING", desc: "Turning complex technical challenges into clean, functional, and user-friendly solutions." },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black mb-20 tracking-tighter" 
          id="services-title"
        >
          Services
        </motion.h2>
        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <TiltCard intensity={5}>
                <div className="group border border-white/5 py-12 flex flex-col md:flex-row md:items-center gap-8 cursor-pointer hover:bg-white/5 transition-all duration-500 px-8 relative overflow-hidden rounded-[32px] glass-card">
                  <div className="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                  <span className="text-xl font-display text-white/40 group-hover:text-accent transition-colors relative z-10">{service.id}</span>
                  <h3 className="text-4xl md:text-5xl font-black md:w-1/2 group-hover:translate-x-4 transition-transform duration-500 relative z-10 group-hover:text-white">{service.title}</h3>
                  <p className="text-white/50 text-lg md:w-1/3 leading-relaxed relative z-10 group-hover:text-white/80 transition-colors">{service.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
