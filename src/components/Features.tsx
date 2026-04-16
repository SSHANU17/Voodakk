import { motion } from 'motion/react';

export default function Features() {
  const features = [
    { title: "Neural Systems", desc: "Adaptive architectures that evolve with your data." },
    { title: "Obsidian Security", desc: "Invisible, unbreakable encryption protocols." },
    { title: "Aether Edge", desc: "Global distribution with sub-millisecond latency." },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="group p-12 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 font-mono text-[8px] opacity-20">
              0{i + 1} // SYS_FEAT
            </div>
            <div className="w-8 h-8 rounded-sm bg-voodak-accent/10 flex items-center justify-center mb-8 group-hover:bg-voodak-accent/20 transition-colors">
              <div className="w-1.5 h-1.5 bg-voodak-accent" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-voodak-accent transition-colors">{f.title}</h3>
            <p className="text-white/40 font-sans text-sm leading-relaxed">{f.desc}</p>
            
            {/* Technical Corner Marker */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-voodak-accent/0 group-hover:border-voodak-accent/50 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
