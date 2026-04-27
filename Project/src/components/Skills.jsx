import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const skillsData = [
  { category: "Web Technologies", items: ["React", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Programming", items: ["Java", "C++", "C", "Python", "JavaScript"] },
  { category: "Data Science", items: ["MySQL", "Matplotlib", "Jupyter", "Octave"] },
  { category: "Tools & OS", items: ["Git", "Linux", "VS Code"] }
];

const FloatingNode = ({ skill, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    animate={{ y: [0, -15, 0] }}
    transition={{ 
      y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" } 
    }}
    className="relative group cursor-pointer flex justify-center items-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#151030] to-purple-900/40 border border-purple-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(145,94,255,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all z-10"
  >
    <span className="text-gray-300 font-semibold text-xs sm:text-sm text-center px-2 group-hover:text-white group-hover:scale-110 transition-all">
      {skill}
    </span>
    {/* Node core glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-10 blur-md transition-opacity"></div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 relative z-10">
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        
        <motion.div variants={textVariant(0.1)} className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-[0.2em] font-mono text-sm mb-2">Technical Arsenal</p>
          <h2 className="text-white font-black text-[40px] sm:text-[60px] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Skill Constellation.</h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {skillsData.map((cluster, idx) => (
            <motion.div key={idx} variants={fadeIn("up", "tween", 0.2 + (idx * 0.1), 1)} className="flex flex-col items-center">
              <h3 className="text-xl text-gray-400 font-mono mb-8 border-b border-purple-500/30 pb-2">{cluster.category}</h3>
              
              {/* Constellation Container */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-4xl relative">
                {/* Simulated connecting lines (Optional visual flair) */}
                <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 pointer-events-none">
                   <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                </div>

                {cluster.items.map((skill, i) => (
                  <FloatingNode key={skill} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;
