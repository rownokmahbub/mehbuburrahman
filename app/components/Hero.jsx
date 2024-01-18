"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import WebCarousel from "./web/WebCarousal";

export default function WebHero() {
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
      className="relative main-light pt-10 pb-44 lg:pt-16 dark:main-dark md:border-b  dark:border-slate-500 px-4 lg:px-40"
      id="hero"
    >
      <div className="absolute w-56 top-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl rounded-full"></div>
      <img className="absolute top-28 left-12 md:top-20 animate-bounce-slow md:left-56 w-10 md:w-20" src="/Leaf.svg" alt="leaf" />
      <img className="absolute bottom-36 right-10 md:bottom-56 animate-bounce-slow md:right-56 w-10 md:w-20" src="/Team.svg" alt="leaf" />
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-center max-w-3xl w-full"
          data-aos="fade-right"
        >
          <div className="flex relative justify-center items-center gap-3 bg-[#0066FF]/5 dark:bg-slate-800 px-6 py-2 rounded-full">
            <span class="hidden absolute lg:left-4 lg:top-3 lg:flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <p className="text-sm ml-3 text-secondary dark:text-white capitalize font-medium">🙋🏼‍♂️ Hi - I'm Mehbubur Rahman</p>
          </div>
          <Image className="w-28 h-28 mt-5 object-cover rounded-full" src='/web/user.png' width={1200} height={1200} alt="users"/>
          <h3 className="text-3xl text-secondary text-center dark:text-white  lg:text-5xl   font-bold my-3">
          Intuitive Design Speaks Louder Than a Thousand Words
          </h3>
          <div className="max-w-lg text-center text-sm mb-6 md:text-base w-full">
            Designing and developing visually stunning and technically
            proficient websites for clients worldwide.
          </div>
          <Button color="primary" size="lg" variant="shadow">Hire Me</Button>
        
        </motion.div>
        
      </div>
    </div>
  );
}
