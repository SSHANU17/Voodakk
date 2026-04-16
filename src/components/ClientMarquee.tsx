import { motion } from 'motion/react';

const clients = [
  "AETHER CORP", "NEON LABS", "OBSIDIAN SYSTEMS", "CYBER CORE", 
  "QUANTUM REACH", "VOID ARCHIVE", "SILICON SOUL", "DIGITAL DUST",
  "AETHER CORP", "NEON LABS", "OBSIDIAN SYSTEMS", "CYBER CORE"
];

export default function ClientMarquee() {
  return (
    <section className="py-20 border-y border-white/5 bg-voodak-paper relative overflow-hidden">
      <div className="absolute inset-0 technical-grid-fine opacity-20" />
      <div className="flex whitespace-nowrap relative z-10">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-24 items-center"
        >
          {clients.map((client, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-7xl font-sans font-black uppercase text-white/5 hover:text-voodak-accent transition-colors cursor-default select-none tracking-tighter"
            >
              {client}
            </span>
          ))}
        </motion.div>
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-24 items-center"
        >
          {clients.map((client, i) => (
            <span 
              key={`dup-${i}`} 
              className="text-4xl md:text-7xl font-sans font-black uppercase text-white/5 hover:text-voodak-accent transition-colors cursor-default select-none tracking-tighter"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
