import { motion } from 'motion/react';
import { Send, Phone, Mail, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-voodak-gold font-mono text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Uplink
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic text-gradient mb-8 glitch-hover"
            data-text="Establish Connection."
          >
            Establish <br /> Connection.
          </motion.h2>
          <p className="text-voodak-ink/60 font-sans max-w-md text-lg leading-relaxed mb-12">
            Ready to architect your digital obsidian? Reach out to our neural collective 
            for bespoke engineering and design.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-voodak-gold group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm uppercase tracking-widest">uplink@voodak.systems</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-voodak-gold group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm uppercase tracking-widest">+1 (888) VOODAK-0</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/[0.02]"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-voodak-gold uppercase tracking-widest ml-1">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-voodak-ink/20" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-voodak-paper/50 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-voodak-gold/50 transition-colors font-sans"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-voodak-gold uppercase tracking-widest ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-voodak-ink/20" />
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-voodak-paper/50 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-voodak-gold/50 transition-colors font-sans"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-voodak-gold uppercase tracking-widest ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-voodak-ink/20" />
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-voodak-paper/50 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-voodak-gold/50 transition-colors font-sans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-voodak-gold uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-voodak-paper/50 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-voodak-gold/50 transition-colors font-sans resize-none"
              />
            </div>

            <button className="w-full bg-voodak-ink text-white rounded-2xl py-5 font-mono text-xs uppercase tracking-[0.3em] hover:bg-voodak-gold transition-all flex items-center justify-center gap-3 group">
              Initialize Transmission
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
