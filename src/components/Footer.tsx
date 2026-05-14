import { motion } from "motion/react";
import { Github, Twitter, Instagram, Linkedin, ArrowRight, Facebook } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1J65dK7T3t/" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="py-24 px-6 md:px-12 bg-transparent" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[12vw] font-bold uppercase tracking-tighter leading-none mb-12"
          >
            LET'S <span className="text-accent italic font-serif">BUILD</span>
          </motion.h2>
          
          <button className="group flex items-center gap-6 glass-card px-12 py-6 rounded-full hover:bg-white hover:text-surface transition-all duration-700">
            <span className="text-xl md:text-3xl font-medium tracking-tight">START A PROJECT</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-accent font-black">Direct WhatsApp</span>
            <a href="https://wa.me/8801631522931" target="_blank" rel="noopener noreferrer" className="text-2xl font-black hover:text-accent transition-colors tracking-tighter">01631522931</a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <motion.a 
                href="https://www.facebook.com/share/1J65dK7T3t/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center shadow-[0_10px_30px_rgba(24,119,242,0.3)] hover:shadow-[0_15px_40px_rgba(24,119,242,0.5)] transition-all duration-500 group"
              >
                <Facebook className="w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-12" />
              </motion.a>
              
              <motion.a 
                href="https://wa.me/8801631522931"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all duration-500 group"
              >
                <svg className="w-6 h-6 text-white fill-current transition-transform duration-500 group-hover:-rotate-12" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.433 5.626 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.filter(s => s.icon !== Facebook).map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all duration-300 border border-white/5 active:scale-95"
                >
                  <social.icon className="w-4 h-4 text-white/60 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2026 FAHIM ST STUDIO — ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
