import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Computer Science and Engineering (CSE)",
    institution: "Sylhet International University",
    location: "Sylhet",
    period: "Graduated 2024",
    result: "CGPA: 2.61",
    icon: GraduationCap
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Scholarshome Majortila College (SMC)",
    location: "Sylhet",
    period: "2015 - 2017",
    result: "GPA: 3.67",
    icon: GraduationCap
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Millennium School Sirajganj",
    location: "Sirajganj",
    period: "2013 - 2015",
    result: "GPA: 4.06",
    icon: GraduationCap
  }
];

const experience = [
  {
    role: "Web Developer",
    company: "Online Mega Shop (SIU)",
    period: "09/2019 - 05/2024",
    description: "Developed UI/UX for internal mega shop projects. Focused on clean interfaces, simple intuitive interactions, and optimal workflow maintenance. Collaborated with senior developers for large-scale corporate design projects.",
    type: "Tech",
    icon: Briefcase
  },
  {
    role: "Sales Executive & CSR",
    company: "Multiple Providers",
    period: "04/2024 - 05/2025",
    description: "Diverse track record including Digicon Technologist (4mo), Shopnow Super Shop (6mo), Digicon Technologies CSR (2mo), UY Lab (5mo), and Foodpanda Inbound Specialist (3mo). Managing client relations and service quality across multiple sectors.",
    type: "Professional",
    icon: Briefcase
  },
  {
    role: "Supervisor",
    company: "Angina Restaurant",
    period: "Present",
    description: "Currently managing operational excellence and team leadership in a high-paced service environment.",
    type: "Leadership",
    icon: Briefcase
  }
];

export default function Resume() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black relative overflow-hidden" id="resume">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent text-[10px] font-black uppercase tracking-[0.5em]"
            >
              Academic & Professional
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            >
              CREDENTIALS<span className="text-accent">.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
          >
            <Award className="w-8 h-8 text-accent animate-pulse" />
            <div>
              <p className="text-xs font-black text-white uppercase tracking-widest">Certified</p>
              <p className="text-[10px] text-white/50 tracking-widest uppercase">Laravel Specialist (SIU)</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest">Academy</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-black border-2 border-accent z-10 group-hover:scale-125 transition-transform" />
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {edu.period}
                      </span>
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                        {edu.result}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-accent transition-colors">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {edu.institution}, {edu.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest">Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 z-10 group-hover:border-accent transition-colors" />
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-3 h-3 text-accent" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-[8px] font-black text-accent/50 uppercase tracking-[0.2em] border border-accent/10 px-2 py-0.5 rounded">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-white mb-1 tracking-tight group-hover:text-accent transition-colors">{exp.role}</h4>
                    <p className="text-accent/80 text-xs font-black uppercase tracking-widest mb-4">{exp.company}</p>
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
