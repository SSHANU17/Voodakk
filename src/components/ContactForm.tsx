import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Send, ChevronRight, Command } from 'lucide-react';

const steps = [
  { id: 'name', label: 'Identity', placeholder: 'Enter your name...' },
  { id: 'email', label: 'Communication', placeholder: 'Enter your email...' },
  { id: 'project', label: 'Objective', placeholder: 'Describe your project...' },
  { id: 'budget', label: 'Allocation', placeholder: 'Estimated budget...' }
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setFormData(prev => ({ ...prev, [steps[currentStep].id]: inputValue }));
    setInputValue('');

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
      console.log('Neural Inquiry Submitted:', formData);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentStep, isSubmitted]);

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 bg-voodak-accent" />
            <span className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.3em] block">
              Neural Inquiry // Connection_Uplink
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter mb-8">
            Initiate <br /> Connection.
          </h2>
          <p className="text-white/40 font-sans max-w-md leading-relaxed mb-12">
            Our terminal is open for high-level inquiries. Describe your objective and our systems will process the request.
          </p>
          
          <div className="flex items-center gap-4 text-voodak-accent/40 font-mono text-xs uppercase tracking-widest">
            <Command className="w-4 h-4" />
            <span>Press Enter to Advance</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-voodak-accent/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative bg-voodak-slate rounded-lg p-8 shadow-2xl border border-white/10 font-mono text-sm overflow-hidden min-h-[400px] flex flex-col">
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
              <Terminal className="w-4 h-4 text-voodak-accent" />
              <span className="text-white/40 uppercase tracking-widest text-[10px]">Voodak Terminal v1.0.4</span>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-4">
                    <span className="text-voodak-accent mb-2 block">[{steps[currentStep].label}]</span>
                    <p className="text-white/60 mb-8">{steps[currentStep].placeholder}</p>
                  </div>

                  <form onSubmit={handleNext} className="mt-auto relative">
                    <div className="flex items-center gap-3 text-voodak-accent">
                      <ChevronRight className="w-5 h-5" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/10"
                        autoFocus
                      />
                    </div>
                    
                    <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-6">
                      <div className="flex gap-1">
                        {steps.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-8 h-1 rounded-sm transition-colors ${
                              i <= currentStep ? 'bg-voodak-accent' : 'bg-white/10'
                            }`}
                          />
                        ))}
                      </div>
                      <button 
                        type="submit"
                        className="text-voodak-accent hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px]"
                      >
                        Execute <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-sm bg-voodak-accent/10 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-voodak-accent" />
                  </div>
                  <h3 className="text-white text-xl mb-4 font-black uppercase tracking-tighter">Transmission Successful.</h3>
                  <p className="text-white/40 max-w-xs font-sans">Our systems are processing your inquiry. Expect a response within 24 cycles.</p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(0);
                      setFormData({});
                    }}
                    className="mt-8 text-voodak-accent text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    New Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
