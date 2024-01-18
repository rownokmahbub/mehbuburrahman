"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Button } from "@nextui-org/react";

export default function Hero2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  const variant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
      className="relative main-light dark:main-dark px-4 lg:px-44"
      id="hero"
    >
      <div className="absolute w-56 top-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl rounded-full"></div>
    
      <div className="container lg:h-screen lg:mx-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-10 items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-start max-w-3xl w-full"
          data-aos="fade-right"
        >
          <h3 className="text-3xl text-secondary dark:text-white leading-7 lg:text-5xl xl:text-7xl capitalize font-semibold my-3">
          Hi I am Rownok, Website & UI/UX Designer
          </h3>
          <div className="max-w-lg text-sm md:text-base w-full">Since creative designers often interact with creativeness, managers and clients, they need strong communication skills.</div>
          <div className="flex flex-col lg:flex-row relative lg:items-center gap-6 mt-10">
            <span class="hidden absolute lg:-right-3 lg:-top-3 lg:flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <Button className="" size="lg" color="primary" variant="shadow" radius="full">
             Hire Me 
             <LuArrowUpRightFromCircle />
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variant}
          transition={{ duration: 1 }}
          className="max-w-xl w-full "
        >
          <Image
            className="w-full "
            src="/hero.svg"
            width={1200}
            height={900}
            alt="image"
          />
        </motion.div>
      </div>
    </div>
  );
}
