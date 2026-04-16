import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Shield, Zap, Code2 } from 'lucide-react';

const techStack = [
  {
    name: "Rust",
    category: "Systems",
    description: "Memory-safe execution for high-performance backends.",
    icon: Code2,
    color: "#de3423"
  },
  {
    name: "Go",
    category: "Infrastructure",
    description: "Scalable microservices with zero-latency edge computing.",
    icon: Zap,
    color: "#00add8"
  },
  {
    name: "WASM",
    category: "Runtime",
    description: "Near-native performance in the browser environment.",
    icon: Terminal,
    color: "#654ff0"
  },
  {
    name: "React",
    category: "Interface",
    description: "Declarative UI systems for complex data visualization.",
    icon: Database,
    color: "#61dafb"
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    description: "Self-healing distributed systems at the network edge.",
    icon: Cpu,
    color: "#326ce5"
  },
  {
    name: "Cryptography",
    category: "Security",
    description: "Quantum-resistant encryption layers for data integrity.",
    icon: Shield,
    color: "#b08d4a"
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-1 bg-voodak-accent" />
          <span className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.3em] block">
            The Obsidian Stack // Infrastructure
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter">
          High-Performance <br /> Foundations.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 bg-voodak-paper hover:bg-white/[0.02] transition-all relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-12">
              <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-voodak-accent/10 transition-colors">
                <tech.icon className="w-6 h-6 text-voodak-accent" />
              </div>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                [0{index + 1}] {tech.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-voodak-accent transition-colors">
              {tech.name}
            </h3>
            
            <p className="text-sm text-white/40 leading-relaxed font-sans">
              {tech.description}
            </p>

            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-voodak-accent/0 group-hover:border-voodak-accent/50 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
