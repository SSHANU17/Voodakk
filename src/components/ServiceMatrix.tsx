import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Code2, Layers, Cpu, Zap, Globe, Shield, Terminal } from 'lucide-react';

const services = {
  design: [
    {
      title: "Interface Architecture",
      description: "Crafting high-fidelity neural-link compatible interfaces.",
      icon: Palette,
      detail: "Focusing on cognitive load reduction and aesthetic precision."
    },
    {
      title: "Visual Systems",
      description: "Developing cohesive design languages for digital ecosystems.",
      icon: Layers,
      detail: "Scalable design tokens and atomic component libraries."
    },
    {
      title: "Experience Flow",
      description: "Mapping intuitive journeys through complex data structures.",
      icon: Globe,
      detail: "Optimizing for both human and machine interactions."
    },
    {
      title: "Motion Identity",
      description: "Defining brand personality through fluid, physics-based motion.",
      icon: Zap,
      detail: "High-performance animations that feel organic and responsive."
    }
  ],
  engineering: [
    {
      title: "System Architecture",
      description: "Building resilient, decentralized backends in Rust and Go.",
      icon: Code2,
      detail: "Distributed systems with zero-point failure tolerance."
    },
    {
      title: "Edge Computing",
      description: "Deploying serverless infrastructure at the network's edge.",
      icon: Cpu,
      detail: "Sub-millisecond latency for global data distribution."
    },
    {
      title: "Security Protocols",
      description: "Implementing quantum-resistant encryption layers.",
      icon: Shield,
      detail: "End-to-end security audits and cryptographic hardening."
    },
    {
      title: "Performance Ops",
      description: "Optimizing low-level code for maximum throughput.",
      icon: Terminal,
      detail: "WASM integration and memory-safe execution environments."
    }
  ]
};

export default function ServiceMatrix() {
  const [mode, setMode] = useState<'design' | 'engineering'>('design');

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 bg-voodak-accent" />
            <span className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.3em] block">
              Capabilities // Matrix_Core
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter">
            The Matrix of <br /> Creation.
          </h2>
        </div>

        <div className="flex p-1 bg-white/5 rounded-sm border border-white/10">
          <button
            onClick={() => setMode('design')}
            className={`px-8 py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest transition-all ${
              mode === 'design' 
                ? 'bg-voodak-accent text-white shadow-lg' 
                : 'text-white/40 hover:text-white'
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setMode('engineering')}
            className={`px-8 py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest transition-all ${
              mode === 'engineering' 
                ? 'bg-voodak-accent text-white shadow-lg' 
                : 'text-white/40 hover:text-white'
            }`}
          >
            Engineering
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        <AnimatePresence mode="wait">
          {services[mode].map((service, index) => (
            <motion.div
              key={`${mode}-${service.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-voodak-paper hover:bg-white/[0.02] transition-all relative overflow-hidden min-h-[360px] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-12 group-hover:bg-voodak-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-voodak-accent" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-voodak-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/5 mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] font-mono text-voodak-accent uppercase tracking-widest">
                  [DETAIL] {service.detail}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-voodak-accent/0 group-hover:border-voodak-accent/50 transition-all" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
