import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // Wave animation variants for continuous motion
  const waveVariants = {
    animate: (i: number) => ({
      y: [0, -5, 0], // Wave pattern
      transition: {
        delay: i * 0.2,
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Container animation
  // const containerVariants = {
  //   hover: {
  //     scale: 1.05,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  return (
    <Link
      className={`flex items-center cursor-pointer ${className}`}
      href="/"
      passHref
    >
      <div className="flex items-center">
        {/* Animated dot */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-purple-dark h-3 w-3 rounded-full mr-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Waving letters */}
        <div className="flex">
          {["r", "a", "w", "i"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={waveVariants}
              animate="animate"
              className={`text-3xl font-bold ${
                i === 0 ? "text-indigo-500" : "text-sky-500"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
