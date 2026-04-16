import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-voodak-paper/80 backdrop-blur-md border border-white/5 px-8 py-4 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-tighter leading-none">VOODAK</span>
            <span className="text-[8px] font-mono text-voodak-accent tracking-[0.3em] uppercase">Systems_Core</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          <a href="#" className="hover:text-voodak-accent transition-colors flex items-center gap-2">
            <span className="text-[8px] opacity-30">01</span> Intelligence
          </a>
          <a href="#portfolio" className="hover:text-voodak-accent transition-colors flex items-center gap-2">
            <span className="text-[8px] opacity-30">02</span> Archives
          </a>
          <a href="#" className="hover:text-voodak-accent transition-colors flex items-center gap-2">
            <span className="text-[8px] opacity-30">03</span> Philosophy
          </a>
          <a href="#tech-stack" className="hover:text-voodak-accent transition-colors flex items-center gap-2">
            <span className="text-[8px] opacity-30">04</span> Stack
          </a>
        </div>

        <button className="hidden md:flex items-center gap-3 text-[10px] font-mono border border-voodak-accent/30 px-6 py-2 rounded-sm hover:bg-voodak-accent hover:text-white transition-all group">
          <div className="w-1 h-1 bg-voodak-accent group-hover:bg-white rounded-full" />
          ESTABLISH_UPLINK
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5 text-voodak-accent" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden mt-4 bg-voodak-slate border border-white/10 p-8 rounded-xl flex flex-col gap-6 font-mono uppercase text-xs tracking-widest"
        >
          <a href="#" onClick={() => setIsOpen(false)} className="flex justify-between items-center">
            Intelligence <span className="text-[8px] opacity-30">01</span>
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="flex justify-between items-center">
            Archives <span className="text-[8px] opacity-30">02</span>
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="flex justify-between items-center">
            Philosophy <span className="text-[8px] opacity-30">03</span>
          </a>
          <a href="#tech-stack" onClick={() => setIsOpen(false)} className="flex justify-between items-center">
            Stack <span className="text-[8px] opacity-30">04</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
