import { motion } from "motion/react";

const bentoImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000"
];

export default function Showcase() {
  return (
    <section className="py-12 px-6 md:px-12 bg-transparent" id="showcase">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[80vh]" id="bento-visuals">
          {bentoImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl overflow-hidden glass-card ${
                i === 0 ? "col-span-2 row-span-2" : 
                i === 3 ? "col-span-2" : ""
              }`}
            >
              <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Showcase" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
