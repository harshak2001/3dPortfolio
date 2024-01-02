import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";

// Hero
const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    let typed = new Typed(".typing", {
      strings: ["Harshak", "Web Developer", "Enthusiast", "Logical Coder"],
      typeSpeed: 100,
      backSpeed: 60, // Note the correct capitalization: backSpeed, not BackSpeed
      loop: true,
    });

    // Cleanup the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff] typing">Harshak</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            BTech student with passion for web development
            <br className="sm:block hidden" />I develop user interfaces and web
            applications
          </p>
        </div>
      </div>

      <br className="sm:block hidden" />

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
