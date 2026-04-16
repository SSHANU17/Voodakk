import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden technical-grid">
      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-voodak-accent/20 z-0 pointer-events-none"
      />

      {/* Technical HUD Markers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 font-mono text-[10px] tracking-tighter">
          [LAT_COORD: 37.7749]<br />
          [LNG_COORD: -122.4194]<br />
          [SYS_STATUS: NOMINAL]
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-[10px] tracking-tighter text-right">
          [BUFFER_SIZE: 1024KB]<br />
          [ENCRYPTION: AES-256-GCM]<br />
          [UPTIME: 99.999%]
        </div>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 h-32 w-px bg-white/10" />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 h-32 w-px bg-white/10" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-voodak-accent origin-left z-[1000]"
        style={{ scaleX }}
      />

      <motion.div style={{ y, opacity }} className="text-center z-10 px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-voodak-accent/30 rounded-full bg-voodak-accent/5 mb-12"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-voodak-accent animate-pulse" />
          <span className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.4em]">
            Obsidian Protocol Active // v2.4.0
          </span>
        </motion.div>
        
        <h1 
          className="text-6xl md:text-9xl font-sans font-black uppercase leading-[0.85] mb-12 tracking-tighter"
        >
          Industrial <br /> Intelligence.
        </h1>
        
        <p className="max-w-xl mx-auto text-lg text-white/60 font-sans mb-16 leading-relaxed">
          The observability platform for high-consequence environments. 
          Securing the data that moves the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="group relative px-8 py-4 bg-voodak-accent text-white font-mono text-xs uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 flex items-center gap-4">
              Deploy System <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform"
            />
          </button>
          <button className="px-8 py-4 border border-white/10 text-white/40 font-mono text-xs uppercase tracking-widest hover:text-white hover:border-white/30 transition-all">
            Technical Specs
          </button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-voodak-accent/30"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
