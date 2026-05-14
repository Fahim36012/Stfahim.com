import { motion } from "motion/react";
import { Check } from "lucide-react";
import TiltCard from "./TiltCard";

const plans = [
  {
    name: "BASIC",
    price: "5",
    description: "Perfect for personal blogs or simple landing pages.",
    features: ["Single Page Layout", "Responsive Design", "Contact Form", "3 Revisions", "7 Days Delivery", "Free Custom Subdomain"],
    accent: "bg-blue-500",
  },
  {
    name: "STANDARD",
    price: "10",
    description: "Best for growing businesses needing a professional presence.",
    features: ["Up to 5 Pages", "Custom UI/UX", "SEO Optimization", "Speed Optimization", "CMS Integration", "Free Host & Domain (stfahim.com)"],
    accent: "bg-accent",
    popular: true,
  },
  {
    name: "PREMIUM",
    price: "20",
    description: "Full-scale applications built for performance and scale.",
    features: ["Unlimited Pages", "Advanced Animations", "E-commerce Ready", "Priority Support", "Database Integration", "Free Host & Premium Domain"],
    accent: "bg-purple-500",
  },
];

const priceList = [
  { service: "Personal Portfolio", price: "Starts at $5" },
  { service: "Business Website", price: "Starts at $15" },
  { service: "E-commerce Store", price: "Starts at $25" },
  { service: "Custom Web App", price: "Starts at $40" },
  { service: "UI/UX Design Only", price: "Starts at $8" },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden" id="pricing">
      {/* Art Background - Liquid Glass Mesh Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,_rgba(0,255,65,0.08)_0%,_transparent_70%)] blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08)_0%,_transparent_70%)] blur-[150px] rounded-full" 
        />
        
        {/* Liquid distortion layer */}
        <div className="absolute inset-0 backdrop-blur-[2px] opacity-40">
          <svg width="100%" height="100%" className="hidden">
            <filter id="distort">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp" />
              <feDisplacementMap in="SourceGraphic" in2="warp" scale="30" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <div className="w-full h-full" style={{ filter: 'url(#distort)' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6"
          >
            TRANSPARENT<br /><span className="text-accent underline-text italic">PRICING</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-xl max-w-2xl mx-auto"
          >
            Choose a plan that fits your vision. High-quality builds for every budget.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <TiltCard intensity={10} className="h-full">
                <div className={`glass-card p-10 h-full rounded-[40px] border-white/10 flex flex-col relative overflow-hidden transition-all duration-500 group/card hover:scale-[1.03] ${plan.popular ? 'border-accent/40 hover:shadow-[0_0_50px_rgba(0,255,65,0.2)]' : 'hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]'}`}>
                  {plan.popular && (
                    <div className="absolute top-6 right-6 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter z-20">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8 relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{plan.name}</p>
                    <div className="relative inline-block px-8 py-4 bg-white/5 rounded-3xl border border-white/10 shadow-[inner_0_2px_10px_rgba(255,255,255,0.05)] overflow-hidden group/price">
                      {/* Price Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent skew-x-[-20deg] group-hover/card:translate-x-full transition-transform duration-1000" />
                      
                      <div className="flex items-baseline gap-1 relative z-10">
                        <span className="text-xl font-bold text-white/60 group-hover/card:text-accent transition-colors">$</span>
                        <span className="text-7xl font-black group-hover/card:scale-110 transition-transform duration-500 origin-left">{plan.price}</span>
                        <span className="text-white/40 font-medium ml-1">/project</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mb-10 leading-relaxed min-h-[50px] relative z-10 group-hover/card:text-white/90 transition-colors">{plan.description}</p>

                  <div className="space-y-4 mb-12 flex-1 relative z-10">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${plan.popular ? 'bg-accent/20 group-hover/card:scale-125 group-hover/card:bg-accent/40' : 'bg-white/10 group-hover/card:scale-125 group-hover/card:bg-white/20'}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-accent' : 'text-white'}`} />
                        </div>
                        <span className="text-sm text-white/80 group-hover/card:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 relative z-10 overflow-hidden group/btn ${plan.popular ? 'bg-accent text-black shadow-[0_0_30px_rgba(0,255,65,0.2)] hover:shadow-[0_0_50px_rgba(0,255,65,0.5)] group-hover/card:translate-y-[-4px]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30 group-hover/card:translate-y-[-4px]'}`}>
                    <span className="relative z-10">Choose {plan.name}</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Price List Table */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[40px] border-white/5 p-8 md:p-16 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">DETAILED SERVICE LIST</h3>
          <div className="space-y-6">
            {priceList.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-white/5 group">
                <span className="text-xl font-medium text-white/60 group-hover:text-white transition-colors capitalize">{item.service}</span>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-white/10 group-hover:bg-accent/40 group-hover:w-24 transition-all duration-500" />
                  <span className="text-xl font-black text-accent">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm italic">* Custom quotes available based on specific requirements.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
