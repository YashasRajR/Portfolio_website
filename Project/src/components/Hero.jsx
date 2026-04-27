import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex flex-col justify-center items-center px-6 sm:px-16 lg:px-24 overflow-hidden pt-20">
      
      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl"
      >
        
        {/* Sub-heading Fade In */}
        <motion.p 
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-purple-400 font-mono text-sm sm:text-lg tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my universe
        </motion.p>

        {/* Huge Cinematic Title */}
        <motion.h1 
          variants={textVariant(0.4)}
          className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-400 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1.1] mb-6 drop-shadow-2xl"
        >
          Yashas Raj R
        </motion.h1>

        {/* Dynamic Roles */}
        <motion.h2 
          variants={textVariant(0.6)}
          className="text-gray-300 font-semibold text-[18px] sm:text-[24px] md:text-[30px] mb-8"
        >
          Building <span className="text-cyan-400">Intelligent Solutions</span> with Code, Data, and Curiosity
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed tracking-wide mb-12"
        >
          Software Developer <span className="text-purple-500 px-2">|</span> Data Science Enthusiast <span className="text-purple-500 px-2">|</span> Problem Solver
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          variants={fadeIn("up", "tween", 1, 1)}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
           <a href="#projects" className="relative group overflow-hidden rounded-full p-[1px]">
             <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-spin" style={{ animationDuration: '3s' }}></span>
             <div className="relative bg-[#030014] px-8 py-3 rounded-full group-hover:bg-transparent transition-colors duration-300">
               <span className="text-white font-medium tracking-wider text-sm">View Work</span>
             </div>
           </a>

           <a href="https://linkedin.com/in/yashas-raj-116037325" target="_blank" className="font-mono bg-white/5 py-3 px-8 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-gray-300 text-sm tracking-widest">
             LINKEDIN
           </a>
        </motion.div>

      </motion.div>

      {/* Floating Astronaut Parallax */}
      <motion.div 
        variants={fadeIn("up", "spring", 1.5, 2)}
        className="absolute bottom-[-10%] md:bottom-[5%] right-[-10%] md:right-[5%] z-0 opacity-40 md:opacity-60 mix-blend-screen pointer-events-none"
      >
        <img 
          src="https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/header-img.svg" 
          alt="Astronaut" 
          className="w-[300px] md:w-[500px] animate-bounce filter drop-shadow-[0_0_50px_rgba(145,94,255,0.8)]"
          style={{ animationDuration: '6s' }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
