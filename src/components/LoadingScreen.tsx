import { motion } from 'motion/react';

const ASCII_LOGO = `
██╗   ██╗ ██████╗  ██████╗ ██████╗  █████╗ ██╗  ██╗
██║   ██║██╔═══██╗██╔═══██╗██╔══██╗██╔══██╗██║ ██╔╝
██║   ██║██║   ██║██║   ██║██║  ██║███████║█████╔╝ 
╚██╗ ██╔╝██║   ██║██║   ██║██║  ██║██╔══██║██╔═██╗ 
 ╚████╔╝ ╚██████╔╝╚██████╔╝██████╔╝██║  ██║██║  ██╗
  ╚═══╝   ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`;

export default function LoadingScreen() {
  const trailCount = 5;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono overflow-hidden">
      <div className="relative">
        {/* Scanning grid background for the logo */}
        <div className="absolute inset-0 technical-grid opacity-5" />
        
        <motion.pre
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-voodak-accent text-[6px] md:text-[10px] leading-[1.2] mb-24 whitespace-pre drop-shadow-[0_0_20px_rgba(255,78,0,0.4)] font-bold"
        >
          {ASCII_LOGO}
        </motion.pre>

        {/* Improved Pac-Man Animation with Trail */}
        <div className="relative w-full max-w-[440px] h-12 mx-auto border-y border-white/10 flex items-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-around px-12">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: (i * 0.32),
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3.2 - 0.1
                }}
                className="w-1.5 h-1.5 bg-voodak-accent/40 rounded-full"
              />
            ))}
          </div>

          {/* Pac-Man Trail */}
          {[...Array(trailCount)].map((_, i) => (
            <motion.div
              key={`trail-${i}`}
              animate={{ x: [0, 440] }}
              transition={{
                duration: 3.2,
                delay: (i * -0.05), // Negative delay for trailing offset
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-0 w-8 h-8 flex items-center justify-center pointer-events-none"
              style={{ opacity: 1 - (i + 1) / (trailCount + 1), filter: `blur(${i * 1}px)` }}
            >
              <div className="w-5 h-5 rounded-full bg-voodak-accent/30" />
            </motion.div>
          ))}

          {/* Lead Pac-Man */}
          <motion.div
            animate={{ x: [0, 440] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-0 w-8 h-8 flex items-center justify-center"
          >
            <div className="relative w-7 h-7">
              {/* Mouth Top */}
              <motion.div
                animate={{ rotate: [0, -40, 0] }}
                transition={{ 
                  duration: 0.25, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full border-[14px] border-voodak-accent border-b-transparent border-r-transparent shadow-[0_0_10px_rgba(255,78,0,0.5)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
              />
              {/* Mouth Bottom */}
              <motion.div
                animate={{ rotate: [0, 40, 0] }}
                transition={{ 
                  duration: 0.25, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full border-[14px] border-voodak-accent border-t-transparent border-r-transparent shadow-[0_0_10px_rgba(255,78,0,0.5)]"
                style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-voodak-accent animate-pulse">::</span>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em]">Establishing Protocol</span>
            <span className="text-voodak-accent animate-pulse">::</span>
          </div>
          <div className="text-[9px] text-white/20 uppercase tracking-widest font-mono">
            v1.3.5.RELEASE_OBSIDIAN
          </div>
        </div>
      </div>

      {/* Background terminal elements */}
      <div className="absolute top-10 left-10 text-[8px] text-white/5 flex flex-col gap-1 pointer-events-none">
        <div>CORE_INIT: OK</div>
        <div>UPLINK: ESTABLISHED</div>
        <div>ENCRYPTION: QUANTUM_LOCKED</div>
        <div>BUFFER: 1024KB</div>
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] text-white/5 flex flex-col items-end gap-1 pointer-events-none">
        <div>LATENCY: 2ms</div>
        <div>THREAT_LEVEL: ZERO</div>
        <div>SCAN_CORE: ACTIVE</div>
      </div>
    </div>
  );
}
