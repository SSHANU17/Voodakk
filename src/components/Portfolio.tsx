import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Cpu, Globe, ArrowUpRight, X } from 'lucide-react';
import { useRef, useState } from 'react';

const projects = [
  {
    title: "NEON-CORE OS",
    category: "System Architecture",
    description: "A decentralized operating system built for the next generation of cyber-runners.",
    tags: ["Rust", "WASM"],
    size: "large",
    caseStudy: {
      challenge: "Building a memory-safe OS for high-concurrency environments with sub-millisecond latency requirements.",
      solution: "Leveraged Rust's ownership model and WASM sandboxing to create a modular, high-performance kernel.",
      metrics: ["99.99% Uptime", "2ms Response Time", "Zero Memory Leaks"]
    }
  },
  {
    title: "VOODAK CLOUD",
    category: "Infrastructure",
    description: "Serverless infrastructure with zero-latency edge computing.",
    tags: ["Go", "K8s"],
    size: "small",
    caseStudy: {
      challenge: "Global data distribution with consistent state across 50+ edge locations.",
      solution: "Implemented a custom CRDT-based synchronization protocol in Go for real-time consistency.",
      metrics: ["50ms Global Sync", "1M+ RPS Support", "99.9% Availability"]
    }
  },
  {
    title: "SHADOW PROTOCOL",
    category: "Security",
    description: "Quantum-resistant security layers.",
    tags: ["TS", "Crypto"],
    size: "small",
    caseStudy: {
      challenge: "Protecting sensitive financial data against future quantum computing threats.",
      solution: "Integrated lattice-based cryptographic algorithms into existing TLS pipelines.",
      metrics: ["Post-Quantum Ready", "Zero Breaches", "FIPS 140-2 Compliant"]
    }
  },
  {
    title: "AETHER INTERFACE",
    category: "UX/UI",
    description: "Neural-link compatible interface design.",
    tags: ["React", "ThreeJS"],
    size: "medium",
    caseStudy: {
      challenge: "Visualizing high-dimensional neural data in a way that is intuitive for human operators.",
      solution: "Developed a custom 3D rendering engine using ThreeJS and React for real-time neural mapping.",
      metrics: ["60 FPS Rendering", "40% Faster Onboarding", "Intuitive UX"]
    }
  }
];

function ProjectCard({ project, index, onClick }: { project: typeof projects[0], index: number, onClick: () => void }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: content moves slightly slower
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // Zoom-in effect: card scales up as it enters view
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      onClick={onClick}
      className={`bento-card group relative flex flex-col justify-between cursor-pointer ${
        project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
        project.size === 'medium' ? 'md:col-span-2' : ''
      }`}
    >
      <motion.div style={{ y }} className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] font-mono text-voodak-accent/60 uppercase tracking-widest mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-voodak-accent transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center group-hover:bg-voodak-accent group-hover:text-white transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div>
          <p className="text-white/40 text-sm mb-6 max-w-xs font-sans">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-sm uppercase tracking-tighter text-white/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pulsating background decoration */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 right-0 p-8 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-voodak-accent" />
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsLoadingDetails(true);
    // Simulate dynamic loading of case study data
    setTimeout(() => {
      setIsLoadingDetails(false);
    }, 800);
  };

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block"
          >
            Selected Works // Archives
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter"
          >
            Crafting the digital <br /> obsidian.
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/40 font-sans max-w-xs text-sm leading-relaxed"
        >
          Our archives represent a decade of pushing the boundaries of what is possible in the digital realm.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-voodak-paper border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8 md:p-12">
                <span className="text-[10px] font-mono text-voodak-accent uppercase tracking-[0.4em] mb-6 block">
                  {selectedProject.category}
                </span>
                
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-white/60 font-sans leading-relaxed mb-12 max-w-xl">
                  {selectedProject.description}
                </p>

                <AnimatePresence mode="wait">
                  {isLoadingDetails ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-20 flex flex-col items-center justify-center space-y-4"
                    >
                      <div className="w-8 h-8 border-2 border-voodak-accent border-t-transparent rounded-full animate-spin" />
                      <span className="text-[10px] font-mono text-voodak-accent uppercase tracking-[0.4em]">Deciphering Archives...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-[10px] font-mono text-voodak-accent uppercase tracking-widest mb-4">The Challenge</h4>
                          <p className="text-sm text-white/40 leading-relaxed font-sans">{selectedProject.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-mono text-voodak-accent uppercase tracking-widest mb-4">The Solution</h4>
                          <p className="text-sm text-white/40 leading-relaxed font-sans">{selectedProject.caseStudy.solution}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-6">Key Metrics</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5">
                          {selectedProject.caseStudy.metrics.map(metric => (
                            <div key={metric} className="p-4 bg-voodak-paper">
                              <span className="text-xs font-mono text-voodak-accent">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.tags.map(tag => (
                              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-mono uppercase tracking-tighter text-white/60">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8">
                          <button className="flex items-center gap-2 text-voodak-accent font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
                            <Globe className="w-4 h-4" /> Live Preview
                          </button>
                          <button className="flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">
                            <Github className="w-4 h-4" /> View Source
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none">
                <Code2 className="w-96 h-96 text-voodak-accent rotate-12" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
