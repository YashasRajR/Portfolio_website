import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Resume = () => {
  return (
    <section id="resume" className="w-full py-32 relative z-10 flex flex-col items-center">
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="w-full max-w-5xl">
        
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[0.2em] font-mono text-sm mb-2">Professional Record</p>
          <h2 className="text-white font-black text-[40px] sm:text-[60px] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Resume.</h2>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="bg-[#151030] p-4 sm:p-8 rounded-3xl border border-white/5 shadow-2xl relative group"
        >
          {/* Subtle glow border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 z-[-1]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <h3 className="text-white text-2xl font-semibold flex items-center gap-3">
                <span className="text-3xl">📄</span> Curriculum Vitae
             </h3>
             <a 
               href="#" 
               className="bg-white/10 hover:bg-white/20 text-white font-mono tracking-wider text-sm py-3 px-8 rounded-full border border-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(145,94,255,0.3)] flex items-center gap-2"
             >
                <span>DOWNLOAD PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
             </a>
          </div>

          {/* Embedded Viewer Mockup */}
          <div className="w-full h-[500px] bg-[#090325] rounded-xl border border-white/5 flex justify-center items-center overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <p className="text-gray-500 font-mono tracking-widest text-sm z-10">[ EMBEDDED PDF VIEWER READY ]</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Resume;
