import { motion } from "motion/react";
import TiltCard from "./TiltCard";

const testimonials = [
  { name: "John Doe", role: "CEO @ TechFlow", text: "Working with Alex was a game-changer. The 3D visuals brought our brand to life in ways we never imagined." },
  { name: "Sarah Smith", role: "Art Director", text: "The attention to detail and motion smoothness is unparalleled. Truly a top-tier professional." },
  { name: "Mike Ross", role: "Founder", text: "Fast, reliable, and incredibly creative. Alex translated our vision into a stunning digital experience." },
  { name: "Emma Wilson", role: "Product Manager", text: "The bento grid portfolio design is just the tip of the iceberg. The execution throughout is flawless." },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">WHAT CLIENTS<br />ARE SAYING 😍</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard intensity={10} className="h-full">
                <div className="glass-card p-10 h-full rounded-[32px] border-white/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-8xl font-serif">"</span>
                  </div>
                  <p className="text-xl text-white/80 leading-relaxed mb-8 relative z-10">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40" />
                    <div>
                      <p className="font-bold uppercase tracking-tight">{t.name}</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
