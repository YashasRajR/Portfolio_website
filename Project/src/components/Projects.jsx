import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const projects = [
  {
    name: "Banking System Simulation",
    description: "A robust Java-based application simulating core banking operations. Engineered to solve complex state management and transactional accuracy problems.",
    tags: [{ name: "Java", color: "text-orange-400" }, { name: "OOP", color: "text-green-400" }],
    link: "https://github.com/YashasRajR"
  },
  {
    name: "Farmer Credit Tool",
    description: "A digital solution designed to help agricultural workers calculate credit scores and manage loans efficiently, bridging the gap between technology and rural farming.",
    tags: [{ name: "Web Tech", color: "text-cyan-400" }, { name: "Data Processing", color: "text-purple-400" }],
    link: "https://github.com/YashasRajR"
  },
  {
    name: "Career Guidance System",
    description: "An analytical platform that processes user inputs to recommend optimized career trajectories based on algorithmic matching.",
    tags: [{ name: "Data Science", color: "text-blue-400" }, { name: "Python", color: "text-yellow-400" }],
    link: "https://github.com/YashasRajR"
  }
];

const ProjectCard = ({ index, name, description, tags, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 450 }}
        className="bg-[#151030] p-6 rounded-2xl sm:w-[360px] w-full border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-purple-500/30 transition-colors duration-300 relative group"
      >
        {/* Glow effect that appears behind the card on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 z-[-1]"></div>

        <div className="relative w-full h-[230px] rounded-2xl bg-[#090325] flex justify-center items-center border border-white/5 overflow-hidden">
           {/* Placeholder for project image/visual */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
           <span className="text-5xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
           
           <div className="absolute inset-0 flex justify-end m-3">
             <div onClick={() => window.open(link, "_blank")} className="w-10 h-10 rounded-full bg-black/60 flex justify-center items-center cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm">
               <span className="text-white text-xs font-bold">GH</span>
             </div>
           </div>
        </div>

        <div className="mt-6">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px] leading-relaxed line-clamp-4">{description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-mono tracking-wider ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-32 relative z-10">
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        
        <motion.div variants={textVariant(0.1)} className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-mono text-sm mb-2">My Work</p>
          <h2 className="text-white font-black text-[40px] sm:text-[60px] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Projects.</h2>
          <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
            The following projects showcase my ability to bridge complex problems with elegant code. Each acts as a standalone product demonstrating problem-solving logic, architectural structuring, and technical execution.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Projects;
