import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "resume", title: "Resume" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#030014]/80 backdrop-blur-md shadow-lg shadow-purple-900/20" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex justify-center items-center shadow-[0_0_15px_rgba(145,94,255,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
            <span className="text-white font-bold text-xl">Y</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex tracking-wide">
            Yashas &nbsp;<span className="sm:block hidden text-purple-400">| Portfolio</span>
          </p>
        </a>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-300 hover:text-white hover:text-shadow-[0_0_10px_#fff] text-[15px] font-medium cursor-pointer transition-all uppercase tracking-wider"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
