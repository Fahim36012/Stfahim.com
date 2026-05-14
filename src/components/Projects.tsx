import { motion, AnimatePresence } from "motion/react";
import TiltCard from "./TiltCard";
import { useState, useRef, useEffect } from "react";
import { X, ArrowRight, ExternalLink, Rocket } from "lucide-react";

/**
 * Enhanced Projects Component
 * Features a bento-style list of projects that open into a high-end liquid glass modal
 * with immersive details and image galleries.
 */

const projects = [
  { 
    id: "01", 
    client: "HAPPY CLIENT", 
    category: "Laptop Repair", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550009158-9ebf6d173371?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "A comprehensive diagnostic and restoration project for high-performance hardware. We focused on thermal management, component stability, and performance optimization for extreme gaming workflows.",
    tags: ["Hardware", "Diagnostics", "Custom Build"],
    caseStudy: "/cv.pdf"
  },
  { 
    id: "02", 
    client: "PC RESTORED", 
    category: "Hardware Service", 
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Full system revitalization for an aging workstation. The project involved deep cleaning, liquid metal application, and firmware optimization to triple the machine's operational lifespan.",
    tags: ["Refurbishment", "Liquid Metal", "Performance"],
    caseStudy: "/cv.pdf"
  },
  { 
    id: "03", 
    client: "SYSTEM FIXED", 
    category: "Tech Solution", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Implementing a resilient network and backup solution for a creative studio. We utilized hybrid cloud storage and customized automation scripts to secure 40TB of sensitive production data.",
    tags: ["Networking", "Backups", "Automation"],
    caseStudy: "/cv.pdf"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleProjectSelect = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setActiveImage(project.image);
    setIsImageLoading(true);
  };

  const handleImageChange = (img: string) => {
    if (img === activeImage) return;
    setIsImageLoading(true);
    setActiveImage(img);
  };

  // Pre-load images or handle logic for smooth scrolling
  useEffect(() => {
    if (selectedProject && scrollRef.current) {
      const activeIdx = selectedProject.gallery.findIndex(img => img === activeImage);
      if (activeIdx !== -1) {
        const thumb = scrollRef.current.children[activeIdx] as HTMLElement;
        if (thumb) {
          scrollRef.current.scrollTo({
            left: thumb.offsetLeft - scrollRef.current.offsetWidth / 2 + thumb.offsetWidth / 2,
            behavior: "smooth"
          });
        }
      }
    }
  }, [activeImage, selectedProject]);

  return (
    <section className="py-32 px-6 md:px-12 bg-transparent" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Project List Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black mb-20 tracking-tighter outline-text" 
          id="projects-title"
        >
          PROJECTS
        </motion.h2>

        {/* Project List Items */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <TiltCard intensity={5}>
                <div 
                  onClick={() => handleProjectSelect(project)}
                  className="group border border-white/5 py-16 flex flex-col md:flex-row md:items-center gap-12 cursor-pointer relative overflow-hidden glass-card rounded-[40px] px-12"
                >
                  {/* Subtle hover background sweep */}
                  <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-8 md:w-1/4 relative z-10">
                    <span className="text-xl font-display text-white/20 group-hover:text-accent transition-colors duration-500">{project.id}</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Client Product</p>
                      <h3 className="text-2xl font-black group-hover:text-white transition-colors duration-500">{project.client}</h3>
                    </div>
                  </div>

                  {/* Horizontal Image Gallery Preview */}
                  <div className="flex-1 flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar relative z-10">
                    {[1, 2, 3].map((_, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                        className="min-w-[240px] h-40 rounded-3xl overflow-hidden bg-black/40 p-1 transition-all duration-500 border border-white/5"
                      >
                        <img src={project.image} className="w-full h-full object-cover rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" alt="Thumb" referrerPolicy="no-referrer" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="md:w-1/4 flex justify-end relative z-10">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn-primary py-4 px-8 text-[10px] neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      VIEW CASE STUDY
                    </motion.button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl max-h-[92vh] bg-surface-soft border border-white/10 rounded-[56px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_150px_rgba(0,255,65,0.1)]"
            >
              {/* Close Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="absolute top-8 right-8 z-50 w-14 h-14 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 hover:bg-accent hover:text-black hover:scale-110 transition-all duration-300 active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Detailed Gallery Column */}
              <div className="w-full lg:w-3/5 h-[45vh] lg:h-auto relative overflow-hidden bg-black/30">
                <AnimatePresence mode="wait">
                  {isImageLoading && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="text-accent"
                      >
                        <Rocket className="w-16 h-16 drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]" />
                        <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3], height: [5, 15, 5] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="w-1 bg-accent/60 mx-auto mt-2 blur-[2px] rounded-full"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                  <motion.div 
                    key={activeImage}
                    initial={{ scale: 1.2, opacity: 0, filter: "blur(20px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={activeImage || selectedProject.image} 
                      onLoad={() => setIsImageLoading(false)}
                      className={`w-full h-full object-cover transition-all duration-1000 ${isImageLoading ? 'scale-110 blur-xl opacity-50' : 'scale-100 blur-0 opacity-100'}`}
                      referrerPolicy="no-referrer"
                    />
                    {/* Visual Confirmation Shine on Load */}
                    {!isImageLoading && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 1.5] }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 z-10 pointer-events-none bg-radial-gradient from-accent/20 to-transparent flex items-center justify-center"
                      >
                         <div className="w-1/2 h-1/2 bg-white/20 blur-[100px] rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-soft via-transparent to-transparent lg:bg-gradient-to-r lg:to-transparent pointer-events-none" />
                
                {/* Interactive Sub-Gallery */}
                <div 
                  ref={scrollRef}
                  className="absolute bottom-8 left-8 right-8 flex gap-4 overflow-x-auto no-scrollbar pb-2 scroll-smooth"
                >
                  {selectedProject.gallery.map((img, i) => (
                    <motion.div 
                      key={i} 
                      onClick={() => handleImageChange(img)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`min-w-[120px] h-24 rounded-3xl border transition-all duration-500 overflow-hidden glass-card p-1 shadow-2xl relative group/subimg cursor-pointer flex-shrink-0 ${activeImage === img ? 'border-accent ring-2 ring-accent/20' : 'border-white/20'}`}
                    >
                      <img src={img} className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${activeImage === img ? 'opacity-100' : 'opacity-40 group-hover/subimg:opacity-100'}`} referrerPolicy="no-referrer" />
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity bg-black/40 ${activeImage === img ? 'opacity-0' : 'opacity-0 group-hover/subimg:opacity-100'}`}>
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-2/5 p-12 md:p-20 overflow-y-auto no-scrollbar flex flex-col">
                <div className="mb-14">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-accent text-xs font-black tracking-[0.3em] uppercase mb-6 block"
                  >
                    {selectedProject.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-10"
                  >
                    {selectedProject.client}
                  </motion.h3>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-10"
                  >
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/50 uppercase tracking-widest font-medium group-hover:border-accent/40 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <div className="space-y-12 flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                    <p className="text-xl text-white/70 leading-relaxed font-light">{selectedProject.description}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 gap-10 py-10 border-y border-white/5"
                  >
                    <div>
                      <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Cycle Time</h4>
                      <p className="text-2xl font-black italic tracking-tighter">14 DAYS</p>
                    </div>
                    <div>
                      <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Strategy</h4>
                      <p className="text-2xl font-black italic tracking-tighter">AGILE</p>
                    </div>
                  </motion.div>
                </div>

                {/* Final Actions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-16 flex flex-col gap-6"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="btn-primary py-5 px-10 flex-1 flex items-center justify-center gap-3 group/btn text-[10px]">
                      LIVE EXPERIENCE <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                    <button className="py-5 px-10 rounded-2xl bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 group-hover:border-white/30 transition-all flex items-center justify-center gap-3">
                      VIEW DESIGN OPS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <a 
                    href={selectedProject.caseStudy} 
                    download={`Case_Study_${selectedProject.client.replace(/\s+/g, '_')}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-2xl border border-accent/20 bg-accent/5 text-accent font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-accent/10 transition-all duration-300"
                  >
                    DOWNLOAD CASE STUDY PDF <ArrowRight className="w-4 h-4 rotate-90" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
