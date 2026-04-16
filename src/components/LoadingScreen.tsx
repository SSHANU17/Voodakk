import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-voodak-obsidian flex items-center justify-center">
      <div className="relative w-64 h-32">
        {/* Heartbeat Line SVG */}
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full stroke-voodak-gold fill-none"
          style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 1, 0],
              pathOffset: [0, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            d="M0,50 L40,50 L50,20 L60,80 L70,50 L110,50 L120,30 L130,70 L140,50 L200,50"
          />
          {/* Static faint line for background */}
          <path
            className="opacity-10"
            d="M0,50 L40,50 L50,20 L60,80 L70,50 L110,50 L120,30 L130,70 L140,50 L200,50"
          />
        </svg>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-voodak-gold uppercase tracking-[0.5em]"
        >
          Synchronizing...
        </motion.div>
      </div>
    </div>
  );
}
