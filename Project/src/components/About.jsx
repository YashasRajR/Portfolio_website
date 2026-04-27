import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <section id="about" className="w-full py-32 relative z-10 flex flex-col items-center">
      
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="w-full">
        <motion.div variants={textVariant(0.2)} className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-white font-black text-[40px] sm:text-[60px] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Origin Story.</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 w-full">
          
          {/* Text Storytelling */}
          <motion.div variants={fadeIn("right", "tween", 0.4, 1)} className="lg:w-1/2 flex flex-col gap-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I didn’t just want to write code; I wanted to understand the data that drives it. 
              My journey began with an insatiable <span className="text-purple-400 font-semibold">curiosity</span> about how digital systems scale and solve real-world problems.
            </p>
            <p>
              Currently, I am navigating two massive academic orbits simultaneously: 
              engineering the core fundamentals of software at <span className="text-cyan-400 font-semibold">Ganpat University</span>, while decoding complex machine learning architectures at <span className="text-cyan-400 font-semibold">IIT Madras</span>.
            </p>
            <p className="border-l-4 border-purple-500 pl-4 italic text-gray-400">
              "Continuous learning isn't a phase, it's my operational baseline. I build things that matter."
            </p>
          </motion.div>

          {/* Animated Orbit System */}
          <motion.div variants={fadeIn("left", "tween", 0.6, 1)} className="lg:w-1/2 flex justify-center items-center relative h-[400px] w-full max-w-[400px]">
             
             {/* Central Sun Node */}
             <div className="absolute inset-0 flex justify-center items-center z-20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-900 flex justify-center items-center shadow-[0_0_50px_rgba(145,94,255,0.6)] border-2 border-purple-400/50">
                  <span className="text-white font-bold font-mono">Me</span>
                </div>
             </div>

             {/* Orbit Ring 1 (Ganpat) */}
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[250px] h-[250px] rounded-full border border-dashed border-gray-600/50 flex justify-center"
             >
                <div className="w-12 h-12 bg-[#030014] rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex justify-center items-center -translate-y-6 relative group cursor-pointer">
                  <span className="text-xs">🎓</span>
                  {/* Tooltip */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[#151030] text-cyan-300 text-xs px-3 py-1 rounded whitespace-nowrap border border-cyan-900">
                    B.Tech CSE (Ganpat)
                  </div>
                </div>
             </motion.div>

             {/* Orbit Ring 2 (IIT Madras) */}
             <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
               className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-gray-700/50 flex justify-center items-end"
             >
                <div className="w-16 h-16 bg-[#030014] rounded-full border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex justify-center items-center translate-y-8 relative group cursor-pointer">
                  <span className="text-lg">📊</span>
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[#151030] text-purple-300 text-xs px-3 py-1 rounded whitespace-nowrap border border-purple-900">
                    BS Data Science (IIT-M)
                  </div>
                </div>
             </motion.div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
