import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StarsCanvas = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars on mount
    const newStars = Array.from({ length: 150 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] overflow-hidden bg-[#030014]">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_#fff]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Vignette effect overlay to blend edges */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-[#030014]/60 to-[#030014]"></div>
    </div>
  );
};

export default StarsCanvas;
