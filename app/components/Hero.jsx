"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import Carousel from "./Carousel";

export default function Hero() {
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
      className="relative main-light pb-12 dark:main-dark px-4 lg:px-40"
      id="hero"
    >
      <div className="absolute w-56 top-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl rounded-full"></div>
    
      <div className=" flex flex-col md:h-[60vh] justify-center  gap-10 items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-center max-w-3xl w-full"
          data-aos="fade-right"
        >
          <h3 className="text-3xl text-secondary text-center dark:text-white leading-7 lg:text-5xl  capitalize font-semibold my-3">
          Trending Portfolio Page Collections with Next JS
          </h3>
          <div className="max-w-lg text-center text-sm md:text-base w-full">Welcome to Rmfolio - the leading Portfolio page templates, built with React, Next JS & Tailwind CSS Framer Motion. - Light mode /Dark mode</div>
          <div className="flex flex-col lg:flex-row relative lg:items-center gap-6 mt-5">
            <span class="hidden absolute lg:-right-3 lg:-top-3 lg:flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <Button className="mb-10" size="lg" color="primary" variant="shadow" radius="md">
             Purchase Now
             <LuArrowUpRightFromCircle />
            </Button>
          </div>
        </motion.div>
         
      </div>
      <Carousel/>
    </div>
  );
}
