"use client";

import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Tools() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  const services = [
    {
      title: "Figma",

      image: "/figma.svg",
    },
    {
      title: "Adode XD",

      image: "/xd.svg",
    },
    {
      title: "Sketch",

      image: "/sketch.svg",
    },
  ];
  return (
    <div
      ref={ref}
      className=" relative bg-white dark:main-dark py-10 lg:py-2 px-4 lg:px-10 "
      id="service"
    >
      <div className="container lg:mx-auto mt-5">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl text-secondary text-center dark:text-white font-semibold"
          >
          Tools For Design
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-center mt-2 max-w-2xl w-full"
          >
            Tools that I use regularly
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-10 items-center py-10">
          {services.map((service, i) => (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1 }}
              key={i}
              className="border-2 card-light dark:card-dark  relative border-slate-200  dark:border-[#282D45] px-4 py-3 md:px-5 md:py-5 flex flex-col justify-between md:justify-center items-center group rounded-xl"
            >
              <div className="text-lg md:text-4xl w-10 h-10 md:w-16 md:h-16  group-hover:scale-90 transition duration-400 flex justify-center items-center">
                <Image src={service.image} alt={service.title} width={300} height={300} className="w-full"/>
              </div>
              <h3 className="text-base lg:text-xl my-2 md:my-4 font-semibold">
                {service.title}
              </h3>
              <p className="text-center mb-2">{service.subtitle}</p>
          
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
