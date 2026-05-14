import { motion } from "motion/react";
import { 
  Code2, 
  Video, 
  Globe, 
  Cpu, 
  Lightbulb, 
  Terminal, 
  Layers, 
  Camera,
  Search,
  Atom,
  Server,
  Database,
  Smartphone,
  Cpu as AiIcon,
  Sparkles,
  Zap,
  Bot
} from "lucide-react";

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: any } = {
    "React": Atom,
    "Next.js": Globe,
    "TypeScript": Code2,
    "Tailwind CSS": Layers,
    "Node.js": Server,
    "Firebase": Database,
    "Prompt Engineering": AiIcon,
    "AI Automations": Bot,
    "GenAI Tools": Sparkles,
    "Model Integration": Zap,
  };
  return iconMap[skill] || null;
};

const skillCategories = [
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Firebase"],
    description: "Building high-performance, responsive commercial websites and scalable web applications."
  },
  {
    title: "Core Engineering",
    icon: Terminal,
    skills: ["Data Structures", "Algorithms", "C/C++", "Java", "Database Management", "OS"],
    description: "Strong foundation in computer science principles and efficient code architecture."
  },
  {
    title: "Creative Media",
    icon: Camera,
    skills: ["Professional Video Editing", "Travel Vlogging", "Storytelling", "Color Grading"],
    description: "Creating engaging visual content that tells compelling stories through high-quality video."
  },
  {
    title: "AI & Innovation",
    icon: AiIcon,
    skills: ["Prompt Engineering", "AI Automations", "GenAI Tools", "Model Integration"],
    description: "Leveraging cutting-edge AI technologies to optimize workflows and solve complex problems."
  },
  {
    title: "Software Solutions",
    icon: Layers,
    skills: ["System Design", "Hard Problem Solving", "API Development", "Unit Testing"],
    description: "Architecting robust solutions for demanding technical requirements and challenges."
  },
  {
    title: "UI/UX Strategy",
    icon: Code2,
    skills: ["Responsive Design", "Motion Design", "Figma", "User-Centric Layouts"],
    description: "Designing interface experiences that are as beautiful as they are functional."
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden" id="skills">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest text-accent font-bold mb-4 block">Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">Technical<br />Expertise</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/40 max-w-sm text-lg font-medium uppercase tracking-tight"
          >
            A multi-disciplinary toolkit blending Computer Science rigor with creative media production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="glass-card p-8 rounded-[40px] border-white/5 hover:border-accent/30 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 neon-glow">
                  <category.icon size={28} />
                </div>
                <span className="text-[10px] font-display text-white/20 font-bold tracking-widest">ENUM_0{i + 1}</span>
              </div>

              <h3 className="text-2xl font-black mb-3 tracking-tight uppercase group-hover:text-accent transition-colors flex items-center gap-3">
                {category.title}
              </h3>
              
              <p className="text-white/50 mb-8 text-sm leading-relaxed min-h-[3rem]">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <span 
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[9px] uppercase tracking-widest font-bold text-white/60 bg-white/5 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 cursor-default group/skill"
                    >
                      {Icon && <Icon size={10} className="text-accent group-hover/skill:text-black transition-colors" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
