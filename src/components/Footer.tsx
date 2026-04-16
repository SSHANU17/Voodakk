export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/5 mt-32 bg-voodak-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-voodak-accent/20" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-voodak-accent rounded-full" />
              <span className="text-2xl font-black uppercase tracking-tighter">VOODAK</span>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed font-sans">
              The industrial observability platform for high-consequence environments. 
              Securing the data that moves the world.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-voodak-accent uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40 font-mono uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Intelligence</a></li>
              <li><a href="#" className="hover:text-voodak-accent transition-colors">Archives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-voodak-accent uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-4 text-sm text-white/40 font-mono uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Uplink</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
            © 2024 VOODAK_SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
            [PROT_LEVEL: OBSIDIAN]
          </div>
        </div>
      </div>
    </footer>
  );
}
