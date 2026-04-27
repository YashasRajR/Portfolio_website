import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("System currently offline for integration. Please use LinkedIn!");
  };

  return (
    <section id="contact" className="w-full py-32 relative z-10 flex justify-center">
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="w-full max-w-4xl flex flex-col md:flex-row gap-10 bg-[#151030]/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Left Col: Info */}
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-1 flex flex-col justify-center">
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-mono text-sm mb-2">Get in touch</p>
          <h2 className="text-white font-black text-[40px] sm:text-[50px] leading-tight mb-6">Let’s build something impactful together.</h2>
          
          <div className="flex flex-col gap-4 mt-8">
            <a href="https://linkedin.com/in/yashas-raj-116037325" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex justify-center items-center border border-blue-500/30 group-hover:bg-blue-600/40 transition-colors">
                 <span className="text-blue-400 font-bold">in</span>
              </div>
              <span className="tracking-wide">Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Col: Form */}
        <motion.div variants={fadeIn("left", "tween", 0.4, 1)} className="flex-[1.2] bg-[#090325] p-8 rounded-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500/50 transition-all" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500/50 transition-all" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea rows="4" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500/50 transition-all resize-none" />
            </label>

            <button type="submit" className="bg-gradient-to-r from-purple-600 to-cyan-600 py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-[1.02] transition-transform">
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;
