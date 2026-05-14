import { motion, AnimatePresence } from "motion/react";
import { Facebook, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      // Simulate network request
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) { // 90% success rate for simulation
            resolve(true);
          } else {
            reject(new Error("NETWORK_FAILURE"));
          }
        }, 2500);
      });
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("System handshake failed. Please check your connection or try again via WhatsApp.");
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-transparent" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
            >
              LET'S<br />GET IN<br />TOUCH
            </motion.h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Direct WhatsApp</p>
                <a href="https://wa.me/8801631522931" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-5xl font-black text-white hover:text-accent transition-all duration-500 underline underline-offset-[12px] decoration-accent/20 hover:decoration-accent decoration-4">
                  01631522931
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex flex-col gap-4">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Social Networks</p>
                  <div className="flex gap-4">
                    <motion.a 
                      href="https://www.facebook.com/share/1J65dK7T3t/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 py-4 px-8 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-2xl w-fit group hover:bg-[#1877F2]/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-[0_0_20px_rgba(24,119,242,0.4)]">
                        <Facebook className="w-5 h-5 text-white fill-white" />
                      </div>
                      <span className="font-bold text-white tracking-widest text-[10px] uppercase">Facebook</span>
                    </motion.a>

                    <motion.a 
                      href="https://wa.me/8801631522931"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 py-4 px-8 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl w-fit group hover:bg-[#25D366]/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.433 5.626 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <span className="font-bold text-white tracking-widest text-[10px] uppercase">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <p className="text-white/50 text-lg max-w-md mt-6 font-light leading-relaxed">
                Currently taking on new projects. Send me a message and let's create something extraordinary together.
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden group" 
            id="contact-form"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/20 rounded-tr-[40px] transition-all duration-500 group-hover:border-accent" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/20 rounded-bl-[40px] transition-all duration-500 group-hover:border-accent" />

            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-accent" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-white mb-2">MESSAGE TRANSMITTED</h3>
                    <p className="text-white/60 mb-8 max-w-[280px]">I've received your signal. Expect a response within 24 hours.</p>
                    <button 
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 group/input">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 group-focus-within/input:text-accent transition-colors">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="SHAHRIAR TALUKDER FAHIM" 
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-all duration-500 placeholder:text-white/10 focus:placeholder:text-white/20" 
                        />
                      </div>
                      <div className="space-y-2 group/input">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 group-focus-within/input:text-accent transition-colors">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="stfahim116@gmail.com" 
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-all duration-500 placeholder:text-white/10 focus:placeholder:text-white/20" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2 group/input">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 group-focus-within/input:text-accent transition-colors">Your Message</label>
                      <textarea 
                        required
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="TELL ME ABOUT YOUR PROJECT" 
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-all duration-500 resize-none placeholder:text-white/10 focus:placeholder:text-white/20" 
                      />
                    </div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-xs overflow-hidden"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <p>{errorMessage}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      disabled={status === "sending"}
                      className="w-full btn-primary py-6 text-base neon-glow uppercase font-black tracking-widest overflow-hidden group/btn relative disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <AnimatePresence mode="wait">
                        {status === "sending" ? (
                          <motion.div 
                            key="sending"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center justify-center gap-3 relative z-10"
                          >
                            <motion.div
                              animate={{ 
                                y: [-2, 2, -2],
                                x: [-1, 1, -1]
                              }}
                              transition={{ duration: 0.1, repeat: Infinity }}
                            >
                              <Send className="w-5 h-5 text-accent rotate-[-45deg]" />
                            </motion.div>
                            <span className="animate-pulse">TRANSMITTING SIGNAL...</span>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="idle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center justify-center gap-3 relative z-10"
                          >
                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            <span>Send Message</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
