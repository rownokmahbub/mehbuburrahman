"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Button } from "@nextui-org/react";

export default function ProjectHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
 
  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      ref={ref}
      className="relative main-light mt-mt-10 lg:mt-28 dark:main-dark px-4 w-full lg:px-40"
      id="hero"
    >
      <div className="absolute w-56 top-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl rounded-full"></div>
    
      <div className=" flex flex-col w-full justify-center gap-10 items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-center max-w-3xl w-full"
          data-aos="fade-right"
        >
          <h3 className="text-3xl text-secondary text-center dark:text-white leading-7 lg:text-5xl  capitalize font-semibold my-3">
         Here are some Of my projects that i have worked
          </h3>
          <div className="max-w-lg text-center text-sm mb-12 md:text-base w-full">Welcome to Rmfolio - the leading Portfolio page templates, built with React</div>
          <div className=" w-full rounded-t-3xl overflow-hidden">
          <Image src='/web/webhero.svg' className=" w-full" width={1200} height={1200} alt="hero"/>
          </div>
           
        </motion.div>
         
      </div>
     
    </div>
  );
}
